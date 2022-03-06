import React from 'react';
import PropTypes from 'prop-types';
import { Button as MUIButton } from '@mui/material';
import getStyles from './styles';

const Button = ({ color, onClick, children }) => {
  const styles = getStyles(color);

  return (
    <MUIButton onClick={onClick} variant="contained" sx={styles.root}>
      {children}
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  color: 'primary',
};

export default Button;
