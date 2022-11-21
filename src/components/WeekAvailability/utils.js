import { add, format, isAfter, isEqual as isEqualDates } from 'date-fns';
import { findIndex, slice, values } from 'lodash';
import { WEEKDAY } from 'consts/enums';
import getWeekdayIndex from 'utils/getWeekdayIndex';
import { tileInterval } from './consts';

const getDayNumber = (date) => format(date, 'd');

const getWeekdayToDateMap = (dateFrom) => {
  const mapping = {
    [WEEKDAY.MONDAY]: dateFrom,
    [WEEKDAY.TUESDAY]: add(dateFrom, { days: 1 }),
    [WEEKDAY.WEDNESDAY]: add(dateFrom, { days: 2 }),
    [WEEKDAY.THURSDAY]: add(dateFrom, { days: 3 }),
    [WEEKDAY.FRIDAY]: add(dateFrom, { days: 4 }),
    [WEEKDAY.SATURDAY]: add(dateFrom, { days: 5 }),
    [WEEKDAY.SUNDAY]: add(dateFrom, { days: 6 }),
  };

  return mapping;
};

const getNumberOfIntervalsBetween = (datetimeFrom, datetimeTo) => {
  let iteratingDate = datetimeFrom;
  let numberOfIntervals = 1;

  while (
    !isEqualDates(iteratingDate, datetimeTo) &&
    isAfter(datetimeTo, iteratingDate)
  ) {
    iteratingDate = add(iteratingDate, { minutes: tileInterval });
    numberOfIntervals++;
  }

  return numberOfIntervals;
};

const weekdays = values(WEEKDAY);

const getDayAvailabilities = (date, daysAvailabilities) => {
  const weekdayIndex = getWeekdayIndex(date);
  const weekdayName = weekdays[weekdayIndex];
  return daysAvailabilities[weekdayName];
};

const getWeekdayName = (date) => {
  const weekdayIndex = getWeekdayIndex(date);
  const weekdayName = weekdays[weekdayIndex];
  return weekdayName;
};

const getTimeframeIndex = (timeframe, dayAvailabilities) => {
  return findIndex(
    dayAvailabilities,
    (tf) =>
      isEqualDates(tf.from, timeframe.from) && isEqualDates(tf.to, timeframe.to)
  );
};

const isContinouslyAvailable = (
  daysAvailabilities,
  date,
  timeframe1,
  timeframe2
) => {
  const timeframes = getDayAvailabilities(date, daysAvailabilities);
  const timeframe1Index = getTimeframeIndex(timeframe1, timeframes);
  const timeframe2Index = getTimeframeIndex(timeframe2, timeframes);

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

const getTimeframesBetween = (
  daysAvailabilities,
  date,
  timeframe1,
  timeframe2
) => {
  const timeframes = getDayAvailabilities(date, daysAvailabilities);
  const timeframe1Index = getTimeframeIndex(timeframe1, timeframes);
  const timeframe2Index = getTimeframeIndex(timeframe2, timeframes);

  return slice(timeframes, timeframe1Index, timeframe2Index + 1);
};

const isSelectedTile = (tile, selectedTiles) => {
  if (!tile) {
    return false;
  }

  return (
    findIndex(
      selectedTiles,
      (t) => isEqualDates(t.from, tile.from) && isEqualDates(t.to, tile.to)
    ) >= 0
  );
};

const isInvalidClick = (
  tileFrom,
  tileTo,
  clickedDate,
  clickedTimeframe,
  daysAvailabilities
) => {
  const isTileFromPresent = !!tileFrom;
  const fromAndToAlreadySelected = isTileFromPresent && !!tileTo;
  const differentDateSelected =
    isTileFromPresent && !isEqualDates(tileFrom.date, clickedDate);
  const isNotContinuous =
    isTileFromPresent &&
    !isContinouslyAvailable(
      daysAvailabilities,
      clickedDate,
      tileFrom.timeframe,
      clickedTimeframe
    );
  const isInvalidTilesOrder =
    isTileFromPresent &&
    !isAfter(clickedTimeframe.from, tileFrom.timeframe.from);

  return (
    fromAndToAlreadySelected ||
    differentDateSelected ||
    isNotContinuous ||
    isInvalidTilesOrder
  );
};

export {
  getWeekdayToDateMap,
  getDayNumber,
  getTimeframesBetween,
  getWeekdayName,
  isSelectedTile,
  isInvalidClick,
};
