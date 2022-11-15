import React, { useState } from 'react';
import { map, omit } from 'lodash';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { IMG_PLACEHOLDER_PUBLIC_URL } from 'consts/config';
import { ITEM_TYPE, S3_DIRECTORY } from 'consts/enums';
import { getPinByAddressFromGoogleAPI } from 'consts/queries';
import useAWSUpload from 'hooks/useAWSUpload';
import formatLocation from 'utils/formatLocation';
import setAPIDateFormat from 'utils/setAPIDateFormat';
import { postRequest, postService } from './queries';
import CreatorView from './view';

const AdvertismentCreator = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [type, setType] = useState(null);
  const [animal, setAnimal] = useState(null);
  const {
    uploadFileToS3,
    isLoading: isLoadingAWSSubmit,
    progress: progressAWSSubmit,
  } = useAWSUpload();

  const { isLoading: isLoadingPostRequest, mutate: submitRequest } =
    useMutation(postRequest, {
      onSuccess: () => {
        navigate('/application/requests');
      },
    });

  const { isLoading: isLoadingPostService, mutate: submitService } =
    useMutation(postService, {
      onSuccess: () => {
        navigate('/application/services');
      },
    });

  const goBack = () => {
    const newStep = step - 1;
    if (newStep < 1) {
      navigate(-1);
    } else {
      setStep(newStep);
    }
  };

  const handleTypeSelect = (selectedType) => {
    setType(selectedType);
    setStep(2);
  };

  const handleAnimalSelect = (id) => {
    setAnimal(id);
    setStep(3);
  };

  const handleDataSubmit = async (values) => {
    const latLng = await getPinByAddressFromGoogleAPI(
      `${formatLocation(values.location)}, ${values.location.postalCode}`
    );

    const isService = type === ITEM_TYPE.SERVICE;

    const submit = (publicImageUrl) => {
      const data = {
        ...omit(values, 'image'),
        description: !isService ? values.description : undefined,
        capacity: isService ? values.capacity : undefined,
        animal: { id: animal },
        pin: { ...values.pin, ...latLng },
        imageUrl: publicImageUrl,
        availabilities: map(values.availabilities, (entry) => ({
          ...entry,
          from: setAPIDateFormat(entry.from),
          to: setAPIDateFormat(entry.to),
        })),
      };

      if (isService) {
        submitService(data);
      } else {
        submitRequest(data);
      }
    };

    if (!isService && values.image.file) {
      uploadFileToS3(values.image.file, S3_DIRECTORY.ADVERTISEMENTS, submit);
    } else {
      submit(IMG_PLACEHOLDER_PUBLIC_URL);
    }
  };

  return (
    <CreatorView
      step={step}
      handleTypeSelect={handleTypeSelect}
      handleAnimalSelect={handleAnimalSelect}
      handleDataSubmit={handleDataSubmit}
      goBack={goBack}
      type={type}
      isLoading={isLoadingPostRequest || isLoadingPostService}
      isLoadingAWSSubmit={isLoadingAWSSubmit}
      progressAWSSubmit={progressAWSSubmit}
    />
  );
};

export default AdvertismentCreator;
