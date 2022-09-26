import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import Loader from 'components/Loader';
import { DEBOUNCE_TIME } from 'consts/config';
import getPeriodOptions from 'consts/getPeriodOptions';
import getPriceTypes from 'consts/getPriceTypesOptions';
import { ACTIVITIES_KEY, getActivities } from 'consts/queries';
import mapDictionaryToOptions from 'utils/mapDictionaryToOptions';
import {
  getAddressesFromGoogleAPI,
  GOOGLE_API_ADDRESSES_KEY,
} from '../queries';
import { initialActivityData, initialAvailabilityData } from './consts';
import Step3View from './view';

const Step3Container = ({ onSubmit, isService }) => {
  const { t } = useTranslation();
  const [addressValue, setAddressValue] = useState('');
  const { data: activities, isLoading: isLoadingActivities } = useQuery(
    ACTIVITIES_KEY,
    getActivities
  );

  const {
    data: addresses,
    isLoading: isLoadingAddresses,
    refetch: fetchAddresses,
  } = useQuery(
    GOOGLE_API_ADDRESSES_KEY,
    () => getAddressesFromGoogleAPI(addressValue),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  useEffect(() => {
    if (addressValue) {
      debounce(fetchAddresses, DEBOUNCE_TIME)();
    }
  }, [addressValue]);

  if (isLoadingActivities) {
    return <Loader />;
  }

  const activitiesOptions = mapDictionaryToOptions(
    activities.data,
    'activity',
    t
  );

  const priceTypeOptions = getPriceTypes(t);
  const periodOptions = getPeriodOptions(t);

  const getAddressOptions = (event) => {
    setAddressValue(event.target.value);
  };

  const initialValues = {
    activities: [initialActivityData],
    price: {
      amount: '',
      type: priceTypeOptions[0].value,
    },
    location: {
      address: '',
      apartment: '',
      city: '',
      postalCode: '',
    },
    pin: {
      radius: isService ? '' : undefined,
    },
    availabilities: [initialAvailabilityData],
    capacity: '',
    description: '',
  };

  return (
    <Step3View
      activitiesOptions={activitiesOptions}
      priceTypeOptions={priceTypeOptions}
      periodOptions={periodOptions}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isService={isService}
      getAddressOptions={getAddressOptions}
    />
  );
};

Step3Container.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isService: PropTypes.bool.isRequired,
};

export default Step3Container;
