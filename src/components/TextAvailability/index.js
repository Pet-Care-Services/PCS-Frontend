import React from 'react';
import { map } from 'lodash';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Box, Typography } from '@mui/material';
import Icon from 'components/Icon';
import availabilitiesShape from 'shapes/availabilitiesShape';
import { getPeriodToLabelMap } from './consts';
import styles from './styles';
import { getDateString } from './utils';

const TextAvailability = ({ availabilities }) => {
  const periodToLabelMap = getPeriodToLabelMap();

  return (
    <>
      {map(availabilities, ({ from, to, cyclic, period }, index) => {
        return (
          <Box key={index} sx={styles.row}>
            <Typography variant="h4">
              {getDateString(from, to, cyclic, period)}
            </Typography>
            {cyclic && (
              <>
                <Icon Component={RepeatIcon} size="small" />
                <Typography variant="h4">{periodToLabelMap[period]}</Typography>
              </>
            )}
          </Box>
        );
      })}
    </>
  );
};

TextAvailability.propTypes = {
  availabilities: availabilitiesShape.isRequired,
};

export default TextAvailability;
