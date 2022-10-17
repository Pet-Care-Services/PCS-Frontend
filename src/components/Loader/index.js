import React from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const Loader = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <CircularProgress size={20} thickness={5} />
    </Box>
  );
};

export default Loader;
