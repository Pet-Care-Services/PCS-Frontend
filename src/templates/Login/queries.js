import axios from 'axios';

const postLogin = (data) => {
  return axios.post('/authenticate/login', data);
};

export { postLogin };
