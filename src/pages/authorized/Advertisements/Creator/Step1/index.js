import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

const Step1 = ({ onSubmit }) => {
  return <Box onClick={onSubmit}>Step 1 page</Box>;
};

Step1.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Step1;
