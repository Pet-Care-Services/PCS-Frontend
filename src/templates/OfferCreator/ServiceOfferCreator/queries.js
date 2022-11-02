import axios from 'axios';
import mapParamsForAPI from 'utils/mapParamsForAPI';

const getServiceActivitiesQuery = (animalId, serviceIds) => {
  const params = { animalId, serviceIds };

  return axios.get('/serviceAdvertisements/activities', {
    params: mapParamsForAPI(params),
  });
};

const SERVICE_ACTIVITIES_KEY = 'SERVICE_ACTIVITIES';

const getServiceQuery = (userId, animalId, activityId) => {
  const params = { userId, animalId, activityId };

  // const serviceIdData = await axios.get('/services/identifyService', {
  //   params: mapParamsForAPI(params),
  // });
  return new Promise((resolve) =>
    resolve({
      data: {
        id: 1,
        price: {
          from: 20,
          type: 'SINGLE',
        },
      },
    })
  );
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
