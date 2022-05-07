import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@mui/material';

const Tag = ({ label, color }) => {
  return <Chip label={label} sx={{ backgroundColor: color }} />;
};

Tag.propTypes = {
  label: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
};

export default Tag;
