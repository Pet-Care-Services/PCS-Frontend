import { default as axios } from 'axios';

const getUserProfile = (id) => axios.get(`/users/${id}`);

const USER_PROFILE_KEY = 'USER_PROFILE';

const postProfile = (values) => axios.post('/users/profileSettings', values);

const postReview = (values) => axios.post('/reviews', values);

export { getUserProfile, postProfile, postReview, USER_PROFILE_KEY };
