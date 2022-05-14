import React from 'react';
import PropTypes from 'prop-types';
import { Button as MUIButton, Typography } from '@mui/material';
import getStyles from './styles';

const Button = ({ color, onClick, children, sx }) => {
  const styles = getStyles(color);

  return (
    <MUIButton
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
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  sx: PropTypes.object,
};

Button.defaultProps = {
  color: 'primary',
  sx: {},
};

export default Button;
