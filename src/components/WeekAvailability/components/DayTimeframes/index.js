import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Tooltip from 'components/Tooltip';
import { numberOfTiles } from 'components/WeekAvailability/consts';
import {
  timeframesShape,
  valueShape,
} from 'components/WeekAvailability/shapes';
import { isSelectedTile } from 'components/WeekAvailability/utils';
import { TILE_HEIGHT } from './consts';
import useStyles from './styles';
import { formatTooltipMessage, getDayTimeframeIndex } from './utils';

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
    <Box sx={styles.root}>
      {map(dayAvailabilities, (timeframe, index) => {
        const dayTimeframeIndex = getDayTimeframeIndex(timeframe);

        return (
          <Tooltip
            title={formatTooltipMessage(timeframe.from, timeframe.to)}
            key={index}
          >
            <Box
              onClick={(e) => {
                if (readOnly) {
                  return;
                }
                e.stopPropagation();
                onTileClick(date, timeframe);
              }}
              sx={{
                ...styles.intervalTile,
                ...(dayTimeframeIndex === 0 && styles.first),
                ...(dayTimeframeIndex === numberOfTiles - 1 && styles.last),
                top: getDayTimeframeIndex(timeframe) * TILE_HEIGHT,
                ...(isSelectionInThisDay &&
                  !readOnly &&
                  isSelectedTile(timeframe, value.timeframes) &&
                  styles.active),
              }}
            />
          </Tooltip>
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
