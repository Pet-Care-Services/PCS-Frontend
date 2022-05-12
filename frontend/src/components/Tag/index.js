import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@mui/material';

const Tag = ({ label, color, labelColor }) => {
  return (
    <Chip label={label} sx={{ backgroundColor: color, color: labelColor }} />
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  color: 'theme.black',
};

export default Tag;
