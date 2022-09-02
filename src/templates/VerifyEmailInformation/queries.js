import axios from 'axios';

const postSendVerificationEmail = () => {
  return axios.post('/email/verification/send');
};

export { postSendVerificationEmail };
