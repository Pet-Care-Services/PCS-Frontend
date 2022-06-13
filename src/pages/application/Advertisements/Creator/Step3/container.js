import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import Loader from 'components/Loader';
import getPeriodOptions from 'consts/getPeriodOptions';
import getPriceTypes from 'consts/getPriceTypesOptions';
import { ACTIVITIES_KEY, getActivities } from 'consts/queries';
import mapDictionaryToOptions from 'utils/mapDictionaryToOptions';
import { initialActivityData, initialAvailabilityData } from './consts';
import Step3View from './view';

const Step3Container = ({ onSubmit, isService }) => {
  const { t } = useTranslation();
  const { data: activities, isLoading } = useQuery(
    ACTIVITIES_KEY,
    getActivities
  );

  if (isLoading) {
    return <Loader />;
  }

  const activitiesOptions = mapDictionaryToOptions(activities.data);

  const priceTypeOptions = getPriceTypes(t);
  const periodOptions = getPeriodOptions(t);

  const initialValues = {
    activities: [initialActivityData],
    price: {
      amount: '',
      type: priceTypeOptions[0].value,
    },
    location: '',
    availabilities: [initialAvailabilityData],
    capacity: '',
  };

  return (
    <Step3View
      activitiesOptions={activitiesOptions}
      priceTypeOptions={priceTypeOptions}
      periodOptions={periodOptions}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isService={isService}
    />
  );
};

Step3Container.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isService: PropTypes.bool.isRequired,
};

export default Step3Container;
