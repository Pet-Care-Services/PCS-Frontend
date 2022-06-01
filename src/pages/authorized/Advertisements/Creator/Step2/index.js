import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

const Step2 = ({ onSubmit }) => {
  return <Box onClick={onSubmit}>Step 2 page</Box>;
};

Step2.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Step2;
