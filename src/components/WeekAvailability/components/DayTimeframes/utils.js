import { format } from 'date-fns';
import { toInteger } from 'lodash';
import { hourFormat, minuteFormat, timeFormat } from 'consts/dateFormats';

const formatTooltipMessage = (dateFrom, dateTo) => {
  return `${format(dateFrom, timeFormat)} - ${format(dateTo, timeFormat)}`;
};

const getDayTimeframeIndex = (timeframe) => {
  const hours = toInteger(format(timeframe.from, hourFormat));
  const minutes = toInteger(format(timeframe.from, minuteFormat));

  return hours * 4 + minutes / 15;
};

export { formatTooltipMessage, getDayTimeframeIndex };
