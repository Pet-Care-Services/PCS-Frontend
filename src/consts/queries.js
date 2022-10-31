import axios from 'axios';
import { WEEKDAY } from './enums';

const getAnimals = () => {
  return axios.get('/animals');
};

const getActivities = () => {
  return axios.get('/activities');
};

const getMe = () => {
  return axios.get('/user/me');
};

const getAddressesFromGoogleAPI = (phrase, types) => {
  const AutocompleteService =
    new window.google.maps.places.AutocompleteService();
  return AutocompleteService.getPlacePredictions({
    input: phrase,
    types,
  });
};

const getPinByAddressFromGoogleAPI = async (address) => {
  const Geocoder = new window.google.maps.Geocoder();
  const rawData = await Geocoder.geocode({
    address,
  });

  const pinData = rawData.results[0].geometry.location;
  const latLng = {
    latitude: pinData.lat(),
    longitude: pinData.lng(),
  };
  return latLng;
};

const getWeekAvailability = (serviceId, weekIdentifier) => {
  console.log('request week');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          dateRange: '2022-10-23T22:00:00.000Z/2022-10-30T22:59:59.059Z',
          [WEEKDAY.MONDAY]: [
            '2022-10-26T12:15:00.000Z/2022-10-26T12:30:00.000Z',
            '2022-10-26T12:30:00.000Z/2022-10-26T12:45:00.000Z',
          ],
          [WEEKDAY.TUESDAY]: [],
          [WEEKDAY.WEDNESDAY]: [
            '2022-10-26T12:00:00.000Z/2022-10-26T12:15:00.000Z',
            '2022-10-26T12:15:00.000Z/2022-10-26T12:30:00.000Z',
            '2022-10-26T12:30:00.000Z/2022-10-26T12:45:00.000Z',
            '2022-10-26T12:45:00.000Z/2022-10-26T13:00:00.000Z',
          ],
          [WEEKDAY.THURSDAY]: [],
          [WEEKDAY.FRIDAY]: [],
          [WEEKDAY.SATURDAY]: [],
          [WEEKDAY.SUNDAY]: [],
        },
      });
    }, 1500);
  });
};

const WEEK_AVAILABILITY_KEY = 'WEEK_AVAILABILITY';
const ANIMALS_KEY = 'ANIMALS';
const ACTIVITIES_KEY = 'ACTIVITIES';
const ME_QUERY_KEY = 'ME_QUERY';
const GOOGLE_API_AUTOCOMPLETE_KEY = 'GOOGLE_API_AUTOCOMPLETE';

export {
  getAnimals,
  getActivities,
  getMe,
  getAddressesFromGoogleAPI,
  getPinByAddressFromGoogleAPI,
  getWeekAvailability,
  ANIMALS_KEY,
  ACTIVITIES_KEY,
  ME_QUERY_KEY,
  GOOGLE_API_AUTOCOMPLETE_KEY,
  WEEK_AVAILABILITY_KEY,
};
