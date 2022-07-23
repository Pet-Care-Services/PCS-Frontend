import axios from 'axios';
import { ITEM_TYPE } from 'consts/enums';
import mapParamsForAPI from 'utils/mapParamsForAPI';

const ADVERTISEMENTS_KEY = 'ADVERTISEMENTS';

const getAdvertisements = (itemType, params) => {
  const endpoint =
    itemType === ITEM_TYPE.SERVICE ? 'serviceAdvertisements' : 'requests';
  return axios.get(`/${endpoint}`, {
    params: mapParamsForAPI(params),
  });
};

const postConversation = ({ userId }) => {
  return axios.post('/conversations', {
    userId,
  });
};

export { ADVERTISEMENTS_KEY, getAdvertisements, postConversation };
