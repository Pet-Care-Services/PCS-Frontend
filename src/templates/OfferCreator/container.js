import React, { useState } from 'react';
import { get, isNil } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import availabilitiesShape from 'shapes/availabilitiesShape';
import priceShape from 'shapes/priceShape';
// import { useMutation } from 'react-query';
// import useChat from 'hooks/useChat';
// import { postConversation } from './queries';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import mapDictionaryToOptions from 'utils/mapDictionaryToOptions';
import {
  getServiceActivitiesQuery,
  getServiceQuery,
  SERVICE_ACTIVITIES_KEY,
  IDENTIFIED_SERVICE_KEY,
} from './queries';
import OfferCreatorView from './view';

const OfferCreatorContainer = ({ advertisement }) => {
  const { t } = useTranslation();
  const [chosenAnimalId, setChosenAnimalId] = useState(null);
  const [chosenActivityId, setChosenActivityId] = useState(null);
  const { data: activitiesData, isLoading: isLoadingActivities } = useQuery(
    [SERVICE_ACTIVITIES_KEY, chosenAnimalId],
    () =>
      getServiceActivitiesQuery(chosenAnimalId, advertisement.servicesIndices),
    {
      refetchOnWindowFocus: false,
      enabled: !isNil(chosenAnimalId),
    }
  );

  const { data: serviceData, isLoading: isLoadingService } = useQuery(
    [
      IDENTIFIED_SERVICE_KEY,
      advertisement.userId,
      chosenAnimalId,
      chosenActivityId,
    ],
    () =>
      getServiceQuery(advertisement.userId, chosenAnimalId, chosenActivityId),
    {
      refetchOnWindowFocus: false,
      enabled: !isNil(chosenAnimalId) && !isNil(chosenActivityId),
    }
  );
  // const { openChat } = useChat();
  // const { mutate: createConversation } = useMutation(postConversation, {
  //   onSuccess: () => {
  //     openChat();
  //   },
  // });

  const { price, availabilities, animals, image } = advertisement;
  // console.log(advertisement);

  const onSubmit = (values) => {
    console.log(values);
  };

  const onAnimalChange = (animalId) => {
    setChosenAnimalId(animalId);
    setChosenActivityId(null);
  };

  const onActivityChange = (activityId) => {
    setChosenActivityId(activityId);
  };

  const initialValues = {
    animalId: '',
    activityId: '',
  };

  const activitiesOptions = mapDictionaryToOptions(
    get(activitiesData, 'data'),
    'activity',
    t
  );

  const service = get(serviceData, 'data');
  const isLoading = isLoadingActivities || isLoadingService;

  return (
    <OfferCreatorView
      animalOptions={mapDictionaryToOptions(animals, 'animal', t)}
      activityOptions={activitiesOptions}
      price={price.from}
      availabilities={availabilities}
      initialValues={initialValues}
      onAnimalChange={onAnimalChange}
      onActivityChange={onActivityChange}
      isAnimalSelected={!isNil(chosenAnimalId)}
      isSingleServiceFetched={!isNil(service)}
      isLoading={isLoading}
      image={image}
    />
  );
};

OfferCreatorContainer.propTypes = {
  advertisement: PropTypes.shape({
    price: priceShape,
    availabilities: availabilitiesShape,
    servicesIndices: PropTypes.arrayOf(PropTypes.number),
    userId: stringOrNumberShape,
    animals: PropTypes.arrayOf(
      PropTypes.shape({
        id: stringOrNumberShape,
        name: PropTypes.string,
      })
    ),
    image: PropTypes.string,
  }),
};

export default OfferCreatorContainer;
