import React, { useEffect, useState } from 'react';
import { add, isSameDay, isToday } from 'date-fns';
import { keys, map, noop, pick } from 'lodash';
import PropTypes from 'prop-types';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Typography } from '@mui/material';
import Icon from 'components/Icon';
import Loader from 'components/Loader';
import { WEEKDAY } from 'consts/enums';
import useBreakpoints from 'hooks/useBreakpoints';
import getWeekdayIndex from 'utils/getWeekdayIndex';
import DayTimeframes from './components/DayTimeframes';
import { daysAvailabilitiesShape, valueShape } from './shapes';
import styles from './styles';
import { getWeekdayToDateMap, getDayNumber, getWeekdayName } from './utils';

const WeekAvailabilityView = ({
  value,
  readOnly,
  daysAvailabilities,
  dateFrom,
  isLoading,
  onArrowClick,
  onTileClick,
}) => {
  const [oneDisplayedDate, setOneDisplayedDate] = useState(new Date());
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const weekdayToDateMap = getWeekdayToDateMap(dateFrom);
  const { isSmallScreen } = useBreakpoints();

  const iconSize = isSmallScreen ? 'small' : 'medium';
  const isOneDayDisplayed = isSmallScreen;

  const oneDisplayedWeekdayName = getWeekdayName(oneDisplayedDate);
  const displayedDaysAvailabilities = isOneDayDisplayed
    ? pick(daysAvailabilities, oneDisplayedWeekdayName)
    : daysAvailabilities;

  useEffect(() => {
    if (!isFirstLoad && !isOneDayDisplayed) {
      setOneDisplayedDate(dateFrom);
    }
  }, [dateFrom]);

  useEffect(() => {
    setIsFirstLoad(false);
  }, [dateFrom]);

  return (
    <Box sx={styles.root}>
      <Icon
        Component={KeyboardDoubleArrowLeftIcon}
        size={iconSize}
        onClick={(e) => {
          e.stopPropagation();
          if (isOneDayDisplayed) {
            const newOneDisplayedDate = add(oneDisplayedDate, { days: -1 });
            setOneDisplayedDate(newOneDisplayedDate);

            if (oneDisplayedWeekdayName === WEEKDAY.MONDAY) {
              onArrowClick(-1);
            }
          } else {
            onArrowClick(-1);
          }
        }}
      />
      {map(keys(displayedDaysAvailabilities), (day, index) => {
        const isSelectionInThisDay =
          !readOnly &&
          !!value?.date &&
          (isOneDayDisplayed
            ? isSameDay(oneDisplayedDate, value.date)
            : index === getWeekdayIndex(value.date));

        const isThisDayToday = isOneDayDisplayed
          ? isToday(oneDisplayedDate)
          : isToday(add(dateFrom, { days: index }));

        return (
          <Box sx={styles.dayBoxRoot} key={day}>
            <Typography
              variant="h4"
              sx={[styles.dayNumber, isThisDayToday && styles.active]}
            >
              {getDayNumber(weekdayToDateMap[day])}
            </Typography>
            {!isLoading && (
              <DayTimeframes
                date={weekdayToDateMap[day]}
                readOnly={readOnly}
                dayAvailabilities={daysAvailabilities[day]}
                isSelectionInThisDay={isSelectionInThisDay}
                value={value}
                onTileClick={onTileClick}
              />
            )}
            {/* Loader just in middle day */}
            {isLoading && index === 3 && <Loader />}
          </Box>
        );
      })}
      <Icon
        Component={KeyboardDoubleArrowRightIcon}
        size={iconSize}
        onClick={(e) => {
          e.stopPropagation();
          if (isOneDayDisplayed) {
            const newOneDisplayedDate = add(oneDisplayedDate, { days: 1 });
            setOneDisplayedDate(newOneDisplayedDate);

            if (oneDisplayedWeekdayName === WEEKDAY.SUNDAY) {
              onArrowClick(1);
            }
          } else {
            onArrowClick(1);
          }
        }}
      />
    </Box>
  );
};

WeekAvailabilityView.propTypes = {
  value: valueShape,
  daysAvailabilities: daysAvailabilitiesShape,
  dateFrom: PropTypes.instanceOf(Date).isRequired,
  readOnly: PropTypes.bool,
  isLoading: PropTypes.bool,
  onArrowClick: PropTypes.func,
  onTileClick: PropTypes.func,
};

WeekAvailabilityView.defaultProps = {
  daysAvailabilities: {
    [WEEKDAY.MONDAY]: [],
    [WEEKDAY.TUESDAY]: [],
    [WEEKDAY.WEDNESDAY]: [],
    [WEEKDAY.THURSDAY]: [],
    [WEEKDAY.FRIDAY]: [],
    [WEEKDAY.SATURDAY]: [],
    [WEEKDAY.SUNDAY]: [],
  },
  value: null,
  readOnly: true,
  isLoading: false,
  onArrowClick: noop,
  onTileClick: noop,
};

export default WeekAvailabilityView;
