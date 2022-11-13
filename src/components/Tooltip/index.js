import React from 'react';
import PropTypes from 'prop-types';
import MUITooltip from '@mui/material/Tooltip';

const Tooltip = ({ title, placement, children }) => (
  <MUITooltip title={title} placement={placement}>
    {children}
  </MUITooltip>
);

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

Tooltip.defaultProps = {
  placement: 'bottom',
};

export default Tooltip;
