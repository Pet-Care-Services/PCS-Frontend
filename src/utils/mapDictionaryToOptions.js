import { map } from 'lodash';

export default (dictionary, modelKey, t) =>
  map(dictionary, ({ id, name }) => ({
    value: id,
    label: t(`${modelKey}.${name}`),
  }));
