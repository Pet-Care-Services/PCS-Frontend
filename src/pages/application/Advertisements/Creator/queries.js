import axios from 'axios';

const postService = (data) => {
  return axios.post('/services', data);
};

const postRequest = (data) => {
  return axios.post('/requests', data);
};

export { postService, postRequest };
