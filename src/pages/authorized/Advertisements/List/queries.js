import axios from 'axios';
import { ITEM_TYPE } from 'consts/enums';

const ADVERTISEMENTS_KEY = 'ADVERTISEMENTS';

const getAdvertisements = (itemType) => {
  const endpoint = itemType === ITEM_TYPE.SERVICE ? 'services' : 'requests';
  return axios.get(`/${endpoint}`);
};

export { ADVERTISEMENTS_KEY, getAdvertisements };
