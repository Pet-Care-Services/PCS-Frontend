import { default as axios } from 'axios';

const getUserProfile = (id) => axios.get(`/users/${id}`);

const USER_PROFILE_KEY = 'USER_PROFILE';

const postProfile = (values) => axios.post('/users/profileSettings', values);

export { getUserProfile, postProfile, USER_PROFILE_KEY };
