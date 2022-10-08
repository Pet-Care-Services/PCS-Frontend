import axios from 'axios';

const verifyCodeMutation = (data) => {
  return axios.post('/sms/verification/verify', data);
};

const resendCodeMutation = () => {
  return axios.post('/sms/verification/obtain');
};

export { verifyCodeMutation, resendCodeMutation };
