import { add, format } from 'date-fns';
import isEqual from 'date-fns/isEqual';
import set from 'date-fns/set';
import { findIndex } from 'lodash';
import { tileInterval } from './consts';

const safetyLimit = 7;

const getDayNumbersBetween = (dateFrom, dateTo) => {
  const dayNumbers = [];
  let currentDate = dateFrom;
  const dayAfterDateTo = add(dateTo, { days: 1 });

  do {
    const dayNumber = format(currentDate, 'd');
    dayNumbers.push(dayNumber);
    currentDate = add(currentDate, { days: 1 });
  } while (
    !isEqual(currentDate, dayAfterDateTo) &&
    dayNumbers.length < safetyLimit
  );

  return dayNumbers;
};

const isTimeAvailable = (timeIndex, dayAvailabilities) => {
  const time = format(
    add(set(new Date(), { hours: 0, minutes: 0, seconds: 0 }), {
      minutes: timeIndex * tileInterval,
    }),
    'HH:mm:ss'
  );
  return findIndex(dayAvailabilities, ({ from }) => from === time) >= 0;
};

export { getDayNumbersBetween, isTimeAvailable };
