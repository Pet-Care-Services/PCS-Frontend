import React from 'react';
import { add, isToday } from 'date-fns';
import { keys, map, noop, range } from 'lodash';
import PropTypes from 'prop-types';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Typography } from '@mui/material';
import Icon from 'components/Icon';
import { numberOfTiles } from './consts';
import { daysAvailabilitiesShape } from './shapes';
import useStyles from './styles';
import { getDayNumbersBetween, isTimeAvailable } from './utils';

const AvailabilityGraph = ({
  readOnly,
  daysAvailabilities,
  dateFrom,
  dateTo,
  onArrowClick,
}) => {
  const styles = useStyles(readOnly);
  const dayNumbers = getDayNumbersBetween(dateFrom, dateTo);

  return (
    <Box sx={styles.root}>
      <Icon
        Component={KeyboardDoubleArrowLeftIcon}
        onClick={() => onArrowClick(-1)}
      />
      {map(keys(daysAvailabilities), (day, index) => (
        <Box sx={styles.dayBoxRoot} key={day}>
          <Typography
            variant="h4"
            sx={{
              ...styles.dayNumber,
              ...(isToday(add(dateFrom, { days: index })) && styles.active),
            }}
          >
            {dayNumbers[index]}
          </Typography>
          <Box sx={styles.availabilityBox}>
            {map(range(numberOfTiles), (timeIndex) => (
              <Box
                key={timeIndex}
                sx={{
                  ...styles.intervalTile,
                  ...(isTimeAvailable(timeIndex, daysAvailabilities[day]) &&
                    styles.available),
                }}
              ></Box>
            ))}
          </Box>
        </Box>
      ))}
      <Icon
        Component={KeyboardDoubleArrowRightIcon}
        onClick={() => onArrowClick(1)}
      />
    </Box>
  );
};

AvailabilityGraph.propTypes = {
  daysAvailabilities: daysAvailabilitiesShape.isRequired,
  dateFrom: PropTypes.instanceOf(Date).isRequired,
  dateTo: PropTypes.instanceOf(Date).isRequired,
  readOnly: PropTypes.bool,
  onArrowClick: PropTypes.func,
};

AvailabilityGraph.defaultProps = {
  readOnly: false,
  onArrowClick: noop,
};

export default AvailabilityGraph;
