import { format } from 'date-fns';

const timeFormat = 'HH:mm';

const formatTooltipMessage = (dateFrom, dateTo) => {
  return `${format(dateFrom, timeFormat)} - ${format(dateTo, timeFormat)}`;
};

export { formatTooltipMessage };
