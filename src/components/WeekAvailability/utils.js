import { add, format, isAfter } from 'date-fns';
import set from 'date-fns/set';
import { find, findIndex, split, toInteger } from 'lodash';
import { tileInterval } from './consts';

const getDayNumber = (date) => format(date, 'd');

const getWeekdayToDateMap = (dateFrom) => {
  const mapping = {
    monday: dateFrom,
    tuesday: add(dateFrom, { days: 1 }),
    wednesday: add(dateFrom, { days: 2 }),
    thursday: add(dateFrom, { days: 3 }),
    friday: add(dateFrom, { days: 4 }),
    saturday: add(dateFrom, { days: 5 }),
    sunday: add(dateFrom, { days: 6 }),
  };

  return mapping;
};

const getTimeByTileIndex = (tileIndex) => {
  return format(
    add(set(new Date(), { hours: 0, minutes: 0, seconds: 0 }), {
      minutes: tileIndex * tileInterval,
    }),
    'HH:mm:ss'
  );
};

const isTimeAvailable = (tileIndex, dayAvailabilities) => {
  const time = getTimeByTileIndex(tileIndex);

  return findIndex(dayAvailabilities, ({ from }) => from === time) >= 0;
};

const getTimeEntry = (tileIndex, dayAvailabilities) => {
  const time = getTimeByTileIndex(tileIndex);

  return find(dayAvailabilities, ({ from }) => from === time);
};

const getNumberOfIntervalsBetween = (timeFrom, timeTo) => {
  const [fromHour, fromMinute] = split(timeFrom, ':');
  const abstractDate = set(new Date(), {
    hours: fromHour,
    minutes: fromMinute,
  });
  let numberOfIntervals = 1;

  while (format(abstractDate, 'HH:mm:ss') !== timeTo) {
    add(abstractDate, { minutes: tileInterval });
    numberOfIntervals++;
  }

  return numberOfIntervals;
};

const isContinouslyAvailable = (
  daysAvailabilities,
  date,
  timeframe1,
  timeframe2
) => {
  const weekdayIndex = toInteger(format(date, 'i')) - 1;
  const timeframes = daysAvailabilities[weekdayIndex];
  const timeframe1Index = findIndex(
    timeframes,
    (tf) => tf.from === timeframe1.from && tf.to === timeframe1.to
  );
  const timeframe2Index = findIndex(
    timeframes,
    (tf) => tf.from === timeframe2.from && tf.to === timeframe2.to
  );

  if (timeframe1Index < 0 || timeframe2Index < 0) {
    // nie powinno się zdarzyć
    return false;
  }

  const expectedNumberOfIntervals = getNumberOfIntervalsBetween(
    timeframe1.from,
    timeframe2.from
  );
  if (timeframe2Index - timeframe1Index + 1 !== expectedNumberOfIntervals) {
    return false;
  }

  return true;
};

const areTimesInProperOrder = (timeframe1, timeframe2) => {
  const [fromHour1, fromMinute1] = split(timeframe1.from, ':');
  const [fromHour2, fromMinute2] = split(timeframe2.from, ':');
  const abstractDate1 = set(new Date(), {
    hours: fromHour1,
    minutes: fromMinute1,
  });
  const abstractDate2 = set(new Date(), {
    hours: fromHour2,
    minutes: fromMinute2,
  });

  return isAfter(abstractDate2, abstractDate1);
};

export {
  getWeekdayToDateMap,
  isTimeAvailable,
  getTimeEntry,
  getDayNumber,
  isContinouslyAvailable,
  areTimesInProperOrder,
};
