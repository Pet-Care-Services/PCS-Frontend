import axios from 'axios';

const ANIMALS_KEY = 'ANIMALS';

const getAnimals = () => {
  return axios.get('/animals');
};

export { ANIMALS_KEY, getAnimals };
