import axios from 'axios';
import { WEEKDAY } from 'consts/enums';
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
        serviceId: 1,
        price: {
          from: 20,
          type: 'SINGLE',
        },
        weekAvailability: {
          dateRange: '2022-10-23T22:00:00.000Z/2022-10-30T22:59:59.059Z',
          [WEEKDAY.MONDAY]: [
            '2022-10-26T12:00:00.000Z/2022-10-26T12:15:00.000Z',
            '2022-10-26T12:15:00.000Z/2022-10-26T12:30:00.000Z',
            '2022-10-26T12:30:00.000Z/2022-10-26T12:45:00.000Z',
            '2022-10-26T12:45:00.000Z/2022-10-26T13:00:00.000Z',
          ],
          [WEEKDAY.TUESDAY]: [],
          [WEEKDAY.WEDNESDAY]: [],
          [WEEKDAY.THURSDAY]: [],
          [WEEKDAY.FRIDAY]: [],
          [WEEKDAY.SATURDAY]: [],
          [WEEKDAY.SUNDAY]: [],
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
