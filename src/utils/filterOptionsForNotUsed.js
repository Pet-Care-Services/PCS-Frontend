import { filter, some } from 'lodash';

export default (options, values, currentValue) =>
  filter(
    options,
    ({ value }) =>
      !some(values, ({ id }) => id === value) || currentValue.id === value
  );
