import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

const Step3 = ({ onSubmit }) => {
  return <Box onClick={onSubmit}>Step 3 page</Box>;
};

Step3.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Step3;
