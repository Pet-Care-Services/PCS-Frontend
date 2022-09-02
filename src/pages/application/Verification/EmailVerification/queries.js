import axios from 'axios';

const postVerifyEmail = (data) => {
  return axios.post('/email/verification/verify', data);
};

export { postVerifyEmail };
