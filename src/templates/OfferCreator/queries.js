import axios from 'axios';

const postOffer = (data) => {
  return axios.post('/messages/offer', data);
};

export { postOffer };
