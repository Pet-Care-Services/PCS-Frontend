import React, { useEffect, useState } from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import Loader from 'components/Loader';
import { IMG_PLACEHOLDER_PUBLIC_URL } from 'consts/config';
import { ITEM_TYPE } from 'consts/enums';
import getPeriodOptions from 'consts/getPeriodOptions';
import getPriceTypes from 'consts/getPriceTypesOptions';
import { ACTIVITIES_KEY, getActivities } from 'consts/queries';
import useGoogleAutocomplete from 'hooks/useGoogleAutocomplete';
import mapDictionaryToOptions from 'utils/mapDictionaryToOptions';
import { initialActivityData, initialAvailabilityData } from './consts';
import { mapAddressOptions, mapCityOptions } from './utils';
import Step3View from './view';

const Step3Container = ({
  onSubmit,
  isService,
  isLoading,
  isLoadingAWSSubmit,
  progressAWSSubmit,
}) => {
  const { t } = useTranslation();
  const [addressValue, setAddressValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [sessionId, setSessionId] = useState('');
  const { data: activities, isLoading: isLoadingActivities } = useQuery(
    ACTIVITIES_KEY,
    getActivities
  );
  const typeId = isService ? ITEM_TYPE.SERVICE : ITEM_TYPE.REQUEST;
  const { data: addressData, isLoading: isLoadingAddressOptions } =
    useGoogleAutocomplete(`${typeId}-address-${sessionId}`, addressValue, [
      'address',
    ]);
  const { data: cityData, isLoading: isLoadingCityOptions } =
    useGoogleAutocomplete(`${typeId}-city-${sessionId}`, cityValue, [
      'locality',
    ]);

  useEffect(() => {
    setSessionId(uniqueId());
  }, []);

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

  const initialValues = {
    activities: [initialActivityData],
    price: {
      amount: '',
      type: priceTypeOptions[0].value,
    },
    location: {
      address: '',
      flatNumber: '',
      city: '',
      postalCode: '',
    },
    pin: {
      latitude: 0,
      longitude: 0,
      radius: isService ? '' : undefined,
    },
    availabilities: [initialAvailabilityData],
    capacity: '',
    description: '',
    image: {
      localUrl: IMG_PLACEHOLDER_PUBLIC_URL,
      file: null,
    },
  };

  return (
    <Step3View
      activitiesOptions={activitiesOptions}
      priceTypeOptions={priceTypeOptions}
      periodOptions={periodOptions}
      initialValues={initialValues}
      onSubmit={onSubmit}
      isService={isService}
      getAddressOptions={setAddressValue}
      addressOptions={mapAddressOptions(addressData)}
      isLoadingAddressOptions={isLoadingAddressOptions}
      getCityOptions={setCityValue}
      cityOptions={mapCityOptions(cityData)}
      isLoadingCityOptions={isLoadingCityOptions}
      isLoading={isLoading}
      isLoadingAWSSubmit={isLoadingAWSSubmit}
      progressAWSSubmit={progressAWSSubmit}
    />
  );
};

Step3Container.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isService: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoadingAWSSubmit: PropTypes.bool.isRequired,
  progressAWSSubmit: PropTypes.number.isRequired,
};

export default Step3Container;
