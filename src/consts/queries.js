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

export {
  ANIMALS_KEY,
  getAnimals,
  ACTIVITIES_KEY,
  getActivities,
  ME_QUERY_KEY,
  getMe,
};
