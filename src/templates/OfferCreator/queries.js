import axios from 'axios';
import { get } from 'lodash';
import mapParamsForAPI from 'utils/mapParamsForAPI';

const getServiceActivitiesQuery = (animalId, serviceIds) => {
  const params = { animalId, serviceIds };

  return axios.get('/serviceAdvertisements/activities', {
    params: mapParamsForAPI(params),
  });
};

const SERVICE_ACTIVITIES_KEY = 'SERVICE_ACTIVITIES';

const getServiceQuery = async (userId, animalId, activityId) => {
  const params = { userId, animalId, activityId };

  const serviceIdData = await axios.get('/services/identifyService', {
    params: mapParamsForAPI(params),
  });
  const serviceId = get(serviceIdData, 'data');

  return axios.get(`/services/${serviceId}`);
};

const IDENTIFIED_SERVICE_KEY = 'IDENTIFIED_SERVICE';

const postConversation = ({ userId }) => {
  return axios.post('/conversations', {
    userId,
  });
};

export {
  getServiceActivitiesQuery,
  postConversation,
  getServiceQuery,
  SERVICE_ACTIVITIES_KEY,
  IDENTIFIED_SERVICE_KEY,
};
