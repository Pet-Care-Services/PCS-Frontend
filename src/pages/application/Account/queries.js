import { default as axios } from 'axios';

const getUserProfile = (id) => axios.get(`/users/${id}`);

const USER_PROFILE_KEY = 'USER_PROFILE';

export { getUserProfile, USER_PROFILE_KEY };
