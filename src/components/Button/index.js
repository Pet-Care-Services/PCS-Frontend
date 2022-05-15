import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Button as MUIButton, Typography } from '@mui/material';
import getStyles from './styles';

const Button = ({ color, onClick, children, type, sx }) => {
  const styles = getStyles(color);

  return (
    <MUIButton
      type={type}
      onClick={onClick}
      variant="contained"
      sx={{ ...styles.root, ...sx }}
    >
      <Typography variant="h3">{children}</Typography>
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'secondary', 'neutral']),
  submit: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  sx: PropTypes.object,
};

Button.defaultProps = {
  onClick: noop,
  color: 'primary',
  submit: false,
  type: 'button',
  sx: {},
};

export default Button;
