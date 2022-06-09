import { forEach, keys } from 'lodash';

export default (params) => {
  const notEmptyParams = {};
  forEach(keys(params), (key) => {
    if (params[key] !== '') {
      notEmptyParams[key] = params[key];
    }
  });

  return notEmptyParams;
};
