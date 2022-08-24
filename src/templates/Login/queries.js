import axios from 'axios';

const postLogin = (data) => {
  return axios.post('/authenticate/login', data);
};

const sendCodeMutation = () => {
  return axios.post('/sms/verification/obtain');
};

export { postLogin, sendCodeMutation };
