import { format, isSameDay } from 'date-fns';
import {
  dateFormat,
  datetimeFormat,
  monthDayFormat,
  timeFormat,
} from 'consts/dateFormats';
import { PERIOD } from 'consts/enums';
import getWeekdayNames from 'consts/getWeekdayNames';
import getWeekdayIndex from 'utils/getWeekdayIndex';

const formatDateRange = (from, to) =>
  `${format(from, datetimeFormat)} - ${format(to, datetimeFormat)}`;

const getDateString = (from, to, cyclic, period) => {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const weekdayNames = getWeekdayNames();
  const isTheSameDay = isSameDay(fromDate, toDate);

  if (isTheSameDay) {
    const fromTime = format(fromDate, timeFormat);
    const toTime = format(toDate, timeFormat);
    const timeInterval = `${fromTime} - ${toTime}`;

    if (cyclic) {
      if (period === PERIOD.WEEK) {
        const weekday = weekdayNames[getWeekdayIndex(fromDate)];

        return `${weekday}, ${timeInterval}`;
      }
      if (period === PERIOD.MONTH) {
        const dayOfMonth = format(fromDate, monthDayFormat);
        return `${dayOfMonth}, ${timeInterval}`;
      }
    } else {
      return `${format(fromDate, dateFormat)}, ${timeInterval}`;
    }
  }

  return formatDateRange(fromDate, toDate);
};

export { getDateString };
