import React from 'react';
import { map, range } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Tooltip from 'components/Tooltip';
import { numberOfTiles } from 'components/WeekAvailability/consts';
import {
  timeframesShape,
  valueShape,
} from 'components/WeekAvailability/shapes';
import {
  getTimeEntry,
  isTimeAvailable,
  isSelectedTile,
} from 'components/WeekAvailability/utils';
import useStyles from './styles';

const DayTimeframes = ({
  date,
  readOnly,
  dayAvailabilities,
  isSelectionInThisDay,
  value,
  onTileClick,
}) => {
  const styles = useStyles(readOnly);

  return (
    <Box sx={styles.availabilityBox}>
      {map(range(numberOfTiles), (tileIndex) => {
        const tileData = getTimeEntry(tileIndex, dayAvailabilities);

        const OptionalTooltip = tileData ? Tooltip : React.Fragment;
        const props = tileData ? { title: tileData?.from } : {};

        return (
          <OptionalTooltip {...props} key={tileIndex}>
            <Box
              onClick={() => {
                if (readOnly || !tileData) {
                  return;
                }

                onTileClick(date, tileData);
              }}
              sx={{
                ...styles.intervalTile,
                ...(isTimeAvailable(tileIndex, dayAvailabilities) &&
                  styles.available),
                ...(isSelectionInThisDay &&
                  !readOnly &&
                  isSelectedTile(tileData, value.timeframes) &&
                  styles.active),
              }}
            />
          </OptionalTooltip>
        );
      })}
    </Box>
  );
};

DayTimeframes.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  readOnly: PropTypes.bool.isRequired,
  dayAvailabilities: timeframesShape.isRequired,
  isSelectionInThisDay: PropTypes.bool.isRequired,
  value: valueShape,
  onTileClick: PropTypes.func.isRequired,
};

DayTimeframes.defaultProps = {
  value: null,
};

export default DayTimeframes;
