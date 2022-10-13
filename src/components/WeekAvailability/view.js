import React from 'react';
import { add, format, isToday } from 'date-fns';
import { keys, map, noop, range, toInteger } from 'lodash';
import PropTypes from 'prop-types';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Typography } from '@mui/material';
import Icon from 'components/Icon';
import { numberOfTiles } from './consts';
import { daysAvailabilitiesShape, valueShape } from './shapes';
import useStyles from './styles';
import {
  getWeekdayToDateMap,
  getTimeEntry,
  isTimeAvailable,
  getDayNumber,
  isSelectedTile,
} from './utils';

const WeekAvailabilityView = ({
  value,
  readOnly,
  daysAvailabilities,
  dateFrom,
  onArrowClick,
  onTimeClick,
}) => {
  const styles = useStyles(readOnly);
  const weekdayToDateMap = getWeekdayToDateMap(dateFrom);
  console.log(value);
  return (
    <Box sx={styles.root}>
      <Icon
        Component={KeyboardDoubleArrowLeftIcon}
        onClick={() => onArrowClick(-1)}
      />
      {map(keys(daysAvailabilities), (day, index) => {
        const isSelectionInThisDay =
          value.date && index === toInteger(format(value.date, 'i')) - 1;

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
            <Box sx={styles.availabilityBox}>
              {map(range(numberOfTiles), (tileIndex) => {
                const tileData = getTimeEntry(
                  tileIndex,
                  daysAvailabilities[day]
                );

                return (
                  <Box
                    key={tileIndex}
                    onClick={() => {
                      if (readOnly || !tileData) {
                        return;
                      }

                      onTimeClick(weekdayToDateMap[day], tileData);
                    }}
                    sx={{
                      ...styles.intervalTile,
                      ...(isTimeAvailable(tileIndex, daysAvailabilities[day]) &&
                        styles.available),
                      ...(isSelectionInThisDay &&
                        isSelectedTile(tileData, value.timeframes) &&
                        styles.active),
                    }}
                  ></Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
      <Icon
        Component={KeyboardDoubleArrowRightIcon}
        onClick={() => onArrowClick(1)}
      />
    </Box>
  );
};

WeekAvailabilityView.propTypes = {
  value: valueShape.isRequired,
  daysAvailabilities: daysAvailabilitiesShape.isRequired,
  dateFrom: PropTypes.instanceOf(Date).isRequired,
  readOnly: PropTypes.bool,
  onArrowClick: PropTypes.func,
  onTimeClick: PropTypes.func,
};

WeekAvailabilityView.defaultProps = {
  readOnly: false,
  onArrowClick: noop,
  onTimeClick: noop,
};

export default WeekAvailabilityView;
