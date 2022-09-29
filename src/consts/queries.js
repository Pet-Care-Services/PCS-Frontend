import axios from 'axios';

const ANIMALS_KEY = 'ANIMALS';

const getAnimals = () => {
  return axios.get('/animals');
};

const ACTIVITIES_KEY = 'ACTIVITIES';

const getActivities = () => {
  return axios.get('/activities');
};

const ME_QUERY_KEY = 'ME_QUERY';

const getMe = () => {
  return axios.get('/user/me');
};

const GOOGLE_API_AUTOCOMPLETE_KEY = 'GOOGLE_API_AUTOCOMPLETE';

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

export {
  ANIMALS_KEY,
  getAnimals,
  ACTIVITIES_KEY,
  getActivities,
  ME_QUERY_KEY,
  getMe,
  GOOGLE_API_AUTOCOMPLETE_KEY,
  getAddressesFromGoogleAPI,
  getPinByAddressFromGoogleAPI,
};
