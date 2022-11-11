import { slice, join } from 'lodash';

export default (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }

  return `${join(slice(text, 0, maxLength), '')}...`;
};
