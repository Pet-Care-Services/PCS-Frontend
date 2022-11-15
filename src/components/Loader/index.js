import React from 'react';
import { isNil } from 'lodash';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const Loader = ({ progress, sx }) => {
  return (
    <Box
      sx={{ width: '100%', display: 'flex', justifyContent: 'center', ...sx }}
    >
      <CircularProgress
        size={20}
        thickness={5}
        variant={!isNil(progress) ? 'determinate' : 'indeterminate'}
        value={progress}
      />
    </Box>
  );
};

Loader.propTypes = {
  progress: PropTypes.number,
  sx: PropTypes.object,
};

Loader.defaultProps = {
  progress: undefined,
  sx: {},
};

export default Loader;
