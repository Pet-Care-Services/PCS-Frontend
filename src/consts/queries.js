import axios from 'axios';
import { format } from 'date-fns';
import mapParamsForAPI from 'utils/mapParamsForAPI';
import { weekIdentifierDateFormat } from './dateFormats';

const getAnimals = () => {
  return axios.get('/animals');
};

const getActivities = () => {
  return axios.get('/activities');
};

const getMe = () => {
  return axios.get('/users/me');
};

const getAddressesFromGoogleAPI = (phrase, types) => {
  const AutocompleteService =
    new window.google.maps.places.AutocompleteService();
  return AutocompleteService.getPlacePredictions({
    input: phrase,
    types,
  });
};

const getPinByAddressFromGoogleAPI = async (address) => {
  const Geocoder = new window.google.maps.Geocoder();
  const rawData = await Geocoder.geocode({
    address,
  });

  const pinData = rawData.results[0].geometry.location;
  const latLng = {
    latitude: pinData.lat(),
    longitude: pinData.lng(),
  };
  return latLng;
};

const getWeekAvailability = (serviceId, weekIdentifier) => {
  const params = mapParamsForAPI({
    date: format(weekIdentifier, weekIdentifierDateFormat),
    servicesIndices: serviceId,
  });
  return axios.get('/services/weekAvailability', {
    params,
  });
};

const WEEK_AVAILABILITY_KEY = 'WEEK_AVAILABILITY';
const ANIMALS_KEY = 'ANIMALS';
const ACTIVITIES_KEY = 'ACTIVITIES';
const ME_QUERY_KEY = 'ME_QUERY';
const GOOGLE_API_AUTOCOMPLETE_KEY = 'GOOGLE_API_AUTOCOMPLETE';

export {
  getAnimals,
  getActivities,
  getMe,
  getAddressesFromGoogleAPI,
  getPinByAddressFromGoogleAPI,
  getWeekAvailability,
  ANIMALS_KEY,
  ACTIVITIES_KEY,
  ME_QUERY_KEY,
  GOOGLE_API_AUTOCOMPLETE_KEY,
  WEEK_AVAILABILITY_KEY,
};
