import React from 'react';
import { add, isToday } from 'date-fns';
import { keys, map, noop } from 'lodash';
import PropTypes from 'prop-types';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Typography } from '@mui/material';
import Icon from 'components/Icon';
import Loader from 'components/Loader';
import { WEEKDAY } from 'consts/enums';
import getWeekdayIndex from 'utils/getWeekdayIndex';
import DayTimeframes from './components/DayTimeframes';
import { daysAvailabilitiesShape, valueShape } from './shapes';
import styles from './styles';
import { getWeekdayToDateMap, getDayNumber } from './utils';

const WeekAvailabilityView = ({
  value,
  readOnly,
  daysAvailabilities,
  dateFrom,
  isLoading,
  onArrowClick,
  onTileClick,
}) => {
  const weekdayToDateMap = getWeekdayToDateMap(dateFrom);

  return (
    <Box sx={styles.root}>
      <Icon
        Component={KeyboardDoubleArrowLeftIcon}
        onClick={(e) => {
          e.stopPropagation();
          onArrowClick(-1);
        }}
      />
      {map(keys(daysAvailabilities), (day, index) => {
        const isSelectionInThisDay =
          !readOnly && !!value?.date && index === getWeekdayIndex(value.date);

        return (
          <Box sx={styles.dayBoxRoot} key={day}>
            <Typography
              variant="h4"
              sx={{
                ...styles.dayNumber,
                ...(isToday(add(dateFrom, { days: index })) && styles.active),
              }}
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
        onClick={(e) => {
          e.stopPropagation();
          onArrowClick(1);
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
