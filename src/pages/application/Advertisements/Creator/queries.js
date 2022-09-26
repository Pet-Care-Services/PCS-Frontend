import axios from 'axios';

const postService = (data) => {
  return axios.post('/services', data);
};

const postRequest = (data) => {
  return axios.post('/requests', data);
};

const GOOGLE_API_ADDRESSES_KEY = 'GOOGLE_API_ADDRESSES';

const getAddressesFromGoogleAPI = (phrase) => {
  return axios.get(
    'https://maps.googleapis.com/maps/api/place/autocomplete/json',
    {
      params: { input: phrase, key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY },
    }
  );
};

export {
  postService,
  postRequest,
  getAddressesFromGoogleAPI,
  GOOGLE_API_ADDRESSES_KEY,
};
