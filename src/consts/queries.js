import axios from 'axios';

const ANIMALS_KEY = 'ANIMALS';

const getAnimals = () => {
  return axios.get('/animals');
};

const ACTIVITIES_KEY = 'ACTIVITIES';

const getActivities = () => {
  return axios.get('/activities');
};

export { ANIMALS_KEY, getAnimals, ACTIVITIES_KEY, getActivities };
