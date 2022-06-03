import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import Loader from 'components/Loader';
import getPeriodOptions from 'consts/getPeriodOptions';
import getPriceTypes from 'consts/getPriceTypesOptions';
import { ACTIVITIES_KEY, getActivities } from 'consts/queries';
import { initialAvailabilityData } from './consts';
import Step3View from './view';

const Step3Container = ({ onSubmit }) => {
  const { t } = useTranslation();
  const { data: activities, isLoading } = useQuery(
    ACTIVITIES_KEY,
    getActivities
  );

  if (isLoading) {
    return <Loader />;
  }

  const activitiesOptions = map(activities.data, ({ id, name }) => ({
    value: id,
    label: name,
  }));

  const priceTypeOptions = getPriceTypes(t);
  const periodOptions = getPeriodOptions(t);

  const initialValues = {
    activity: '',
    price: {
      amount: '',
      type: priceTypeOptions[0].value,
    },
    location: '',
    availabilities: [initialAvailabilityData],
  };

  return (
    <Step3View
      activitiesOptions={activitiesOptions}
      priceTypeOptions={priceTypeOptions}
      periodOptions={periodOptions}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  );
};

Step3Container.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Step3Container;
