import { map } from 'lodash';

export default (dictionary) =>
  map(dictionary, ({ id, name }) => ({
    value: id,
    label: name,
  }));
