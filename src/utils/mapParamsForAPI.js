import { forEach, keys } from 'lodash';

export default (params) => {
  const notEmptyParams = new URLSearchParams();
  forEach(keys(params), (key) => {
    const param = params[key];

    if (param !== '') {
      notEmptyParams.append(key, param);
    }
  });

  return notEmptyParams;
};
