import axios from 'axios';

const postSignup = (data) => {
  return axios.post('/authenticate/signup', data);
};

export { postSignup };
