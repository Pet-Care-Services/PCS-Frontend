import React, { useState } from 'react';
import { get, isNil, pick } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery } from 'react-query';
import { ITEM_TYPE } from 'consts/enums';
import useChat from 'hooks/useChat';
import useDialog from 'hooks/useDialog';
import useWeekAvailability from 'hooks/useWeekAvailability';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import mapDictionaryToOptions from 'utils/mapDictionaryToOptions';
import { postOffer } from '../queries';
import {
  getServiceActivitiesQuery,
  getServiceQuery,
  SERVICE_ACTIVITIES_KEY,
  IDENTIFIED_SERVICE_KEY,
} from './queries';
import ServiceOfferCreatorView from './view';

const ServiceOfferCreatorContainer = ({ advertisement }) => {
  const { t } = useTranslation();
  const [chosenAnimalId, setChosenAnimalId] = useState(null);
  const [chosenActivityId, setChosenActivityId] = useState(null);
  const { closeDialog } = useDialog();
  const { openChat } = useChat();

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

  const { mutate: submitOffer, isLoading: isSubmitting } = useMutation(
    postOffer,
    {
      onSuccess: () => {
        closeDialog();
        openChat();
      },
    }
  );

  const service = get(serviceData, 'data');
  const price = get(service, 'price');
  const priceType = get(service, 'priceType');
  const serviceId = get(service, 'serviceId');

  const {
    weekAvailability,
    changeWeek,
    isLoading: isLoadingWeek,
  } = useWeekAvailability(serviceId);

  const { description, animals, image, userId } = advertisement;

  const onSubmit = (values) => {
    const timeframes = values.weekAvailability.timeframes;
    const data = {
      user: {
        userId,
      },
      message: {
        text: values.message,
        offer: {
          offerType: ITEM_TYPE.SERVICE,
          offerId: serviceId,
          ...pick(values, ['price', 'activityId']),
          startTime: timeframes[0].from,
          endTime: timeframes[timeframes.length - 1].to,
        },
      },
    };

    submitOffer(data);
  };

  const onAnimalChange = (animalId) => {
    setChosenAnimalId(animalId);
    setChosenActivityId(null);
  };

  const onActivityChange = (activityId) => {
    setChosenActivityId(activityId);
  };

  const activitiesOptions = mapDictionaryToOptions(
    get(activitiesData, 'data'),
    'activity',
    t
  );

  const initialValues = {
    animalId: chosenAnimalId || '',
    activityId: chosenActivityId || '',
    price: price || 10,
    message: '',
    weekAvailability: null,
  };

  const isSingleServiceFetched = !isNil(service);
  const isLoading = isLoadingActivities || isLoadingService || isSubmitting;

  return (
    <ServiceOfferCreatorView
      animalOptions={mapDictionaryToOptions(animals, 'animal', t)}
      activityOptions={activitiesOptions}
      initialValues={initialValues}
      onAnimalChange={onAnimalChange}
      onActivityChange={onActivityChange}
      onWeekChange={(offset) => changeWeek(offset)}
      onSubmit={onSubmit}
      isAnimalSelected={!isNil(chosenAnimalId)}
      isSingleServiceFetched={isSingleServiceFetched}
      isLoading={isLoading}
      isLoadingWeek={isLoadingWeek}
      image={image}
      priceType={priceType}
      description={description}
      weekAvailability={weekAvailability}
    />
  );
};

ServiceOfferCreatorContainer.propTypes = {
  advertisement: PropTypes.shape({
    servicesIndices: PropTypes.arrayOf(PropTypes.number),
    userId: stringOrNumberShape,
    animals: PropTypes.arrayOf(
      PropTypes.shape({
        id: stringOrNumberShape,
        name: PropTypes.string,
      })
    ),
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default ServiceOfferCreatorContainer;
