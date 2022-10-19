import React from 'react';
import PropTypes from 'prop-types';
import MUITooltip from '@mui/material/Tooltip';

const Tooltip = ({ title, children }) => (
  <MUITooltip title={title}>{children}</MUITooltip>
);

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
