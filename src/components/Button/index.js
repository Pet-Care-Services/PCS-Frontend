import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Button as MUIButton, Typography } from '@mui/material';
import sxShape from 'shapes/sxShape';
import getStyles from './styles';

const Button = ({ color, variant, onClick, children, type, small, sx }) => {
  const styles = getStyles(color);

  return (
    <MUIButton
      type={type}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      variant={variant}
      sx={[styles.root, small && styles.small, sx]}
    >
      <Typography variant="h3">{children}</Typography>
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'secondary', 'neutral', 'error']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['contained', 'text', 'outlined']),
  small: PropTypes.bool,
  sx: sxShape,
};

Button.defaultProps = {
  onClick: noop,
  color: 'primary',
  type: 'button',
  variant: 'contained',
  small: false,
  sx: {},
};

export default Button;
