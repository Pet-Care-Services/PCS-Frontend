import { format } from 'date-fns';
import { toInteger } from 'lodash';
import { tileInterval } from 'components/WeekAvailability/consts';
import { hourFormat, minuteFormat, timeFormat } from 'consts/dateFormats';

const formatTooltipMessage = (dateFrom, dateTo) => {
  return `${format(dateFrom, timeFormat)} - ${format(dateTo, timeFormat)}`;
};

const getDayTimeframeIndex = (timeframe) => {
  const hours = toInteger(format(timeframe.from, hourFormat));
  const minutes = toInteger(format(timeframe.from, minuteFormat));

  return (hours * 60 + minutes) / tileInterval;
};

export { formatTooltipMessage, getDayTimeframeIndex };
