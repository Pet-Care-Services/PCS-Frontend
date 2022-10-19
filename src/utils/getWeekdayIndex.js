import { format } from 'date-fns';
import { toInteger } from 'lodash';
import { weekdayIndexFormat } from 'consts/dateFormats';

export default (date) => toInteger(format(date, weekdayIndexFormat)) - 1;
