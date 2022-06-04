import React, { useState } from 'react';
import { map } from 'lodash';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ITEM_TYPE } from 'consts/enums';
import setAPIDateFormat from 'utils/setAPIDateFormat';
import { postRequest, postService } from './queries';
import CreatorView from './view';

const AdvertismentCreator = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [type, setType] = useState(null);
  const [animal, setAnimal] = useState(null);

  const { mutate: submitRequest } = useMutation(postRequest, {
    onSuccess: () => {
      navigate('/application/requests');
    },
  });

  const { mutate: submitService } = useMutation(postService, {
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

  const handleDataSubmit = (values) => {
    const data = {
      ...values,
      animal: { id: animal },
      availabilities: map(values.availabilities, (entry) => ({
        ...entry,
        from: setAPIDateFormat(entry.from),
        to: setAPIDateFormat(entry.to),
      })),
      userId: 1,
    };

    if (type === ITEM_TYPE.REQUEST) {
      submitRequest(data);
    } else {
      submitService(data);
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
    />
  );
};

export default AdvertismentCreator;
