import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@mui/material';
import colorShape from 'shapes/colorShape';

const Tag = ({ label, color, labelColor }) => {
  return (
    <Chip label={label} sx={{ backgroundColor: color, color: labelColor }} />
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  color: colorShape,
  labelColor: colorShape,
};

Tag.defaultProps = {
  color: (theme) => theme.palette.primary.main,
  labelColor: (theme) => theme.palette.black,
};

export default Tag;
