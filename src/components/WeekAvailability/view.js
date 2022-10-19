import React from 'react';
import { add, format, isToday } from 'date-fns';
import { keys, map, noop, toInteger } from 'lodash';
import PropTypes from 'prop-types';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Typography } from '@mui/material';
import Icon from 'components/Icon';
import DayTimeframes from './components/DayTimeframes';
import { daysAvailabilitiesShape, valueShape } from './shapes';
import styles from './styles';
import { getWeekdayToDateMap, getDayNumber } from './utils';

const WeekAvailabilityView = ({
  value,
  readOnly,
  daysAvailabilities,
  dateFrom,
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
          !readOnly &&
          !!value.date &&
          index === toInteger(format(value.date, 'i')) - 1;

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
            <DayTimeframes
              date={weekdayToDateMap[day]}
              readOnly={readOnly}
              dayAvailabilities={daysAvailabilities[day]}
              isSelectionInThisDay={isSelectionInThisDay}
              value={value}
              onTileClick={onTileClick}
            />
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
  daysAvailabilities: daysAvailabilitiesShape.isRequired,
  dateFrom: PropTypes.instanceOf(Date).isRequired,
  readOnly: PropTypes.bool,
  onArrowClick: PropTypes.func,
  onTileClick: PropTypes.func,
};

WeekAvailabilityView.defaultProps = {
  value: null,
  readOnly: true,
  onArrowClick: noop,
  onTileClick: noop,
};

export default WeekAvailabilityView;
