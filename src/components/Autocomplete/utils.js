import compact from 'lodash/compact';
import isNil from 'lodash/isNil';
import isString from 'lodash/isString';

const getOptions = (options, noOptionsText) => {
  const noOptionsItem = {
    value: -1,
    label: noOptionsText,
  };

  return compact([
    options.length === 0 ? noOptionsItem : undefined,
    ...options,
  ]);
};

const getOptionLabel = (option) => {
  if (isNil(option)) {
    return '';
  }

  return isString(option) ? option : option.label;
};

export { getOptions, getOptionLabel };
