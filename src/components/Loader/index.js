import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const Loader = ({ sx }) => {
  return (
    <Box
      sx={[{ width: '100%', display: 'flex', justifyContent: 'center' }, sx]}
    >
      <CircularProgress size={20} thickness={5} />
    </Box>
  );
};

Loader.propTypes = {
  sx: PropTypes.object,
};

Loader.defaultProps = {
  sx: {},
};

export default Loader;
