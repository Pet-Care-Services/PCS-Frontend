import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Button as MUIButton, Typography } from '@mui/material';
import getStyles from './styles';

const Button = ({ color, onClick, children, type, small, sx }) => {
  const styles = getStyles(color);

  return (
    <MUIButton
      type={type}
      onClick={onClick}
      variant="contained"
      sx={{ ...styles.root, ...(small && styles.small), ...sx }}
    >
      <Typography variant="h3">{children}</Typography>
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'secondary', 'neutral']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  small: PropTypes.bool,
  sx: PropTypes.object,
};

Button.defaultProps = {
  onClick: noop,
  color: 'primary',
  type: 'button',
  small: false,
  sx: {},
};

export default Button;
