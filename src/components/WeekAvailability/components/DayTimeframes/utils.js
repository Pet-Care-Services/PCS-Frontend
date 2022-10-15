import { format } from 'date-fns';
import { toInteger } from 'lodash';

const timeFormat = 'HH:mm';

const formatTooltipMessage = (dateFrom, dateTo) => {
  return `${format(dateFrom, timeFormat)} - ${format(dateTo, timeFormat)}`;
};

const getDayTimeframeIndex = (timeframe) => {
  const hours = toInteger(format(timeframe.from, 'HH'));
  const minutes = toInteger(format(timeframe.from, 'mm'));

  return hours * 4 + minutes / 15;
};

export { formatTooltipMessage, getDayTimeframeIndex };
