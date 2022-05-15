import { every, includes, split } from 'lodash';

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const isStringNumber = (value) =>
  every(split(value, ''), (char) => includes(digits, char));

export { isStringNumber };
