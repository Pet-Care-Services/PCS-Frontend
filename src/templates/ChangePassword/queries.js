import axios from 'axios';

const postChangePassword = (values) =>
  axios.post('/users/changePassword', values);

export { postChangePassword };
