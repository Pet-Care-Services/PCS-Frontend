import React from 'react';
import PropTypes from 'prop-types';
import MuiIconButton from '@mui/material/IconButton';
import { sizes } from './consts';

const Icon = ({ size, Component, onClick, disabled, sx }) => {
  const dimension = sizes[size];

  return (
    <MuiIconButton
      size={size}
      color="inherit"
      onClick={onClick}
      disabled={disabled}
      disableRipple={!onClick}
      sx={{
        ...(!onClick && { cursor: 'default', padding: 0 }),
        '&.MuiIconButton-sizeLarge': {
          padding: 7,
        },
        ...sx,
      }}
    >
      <Component
        sx={{
          width: dimension,
          height: dimension,
        }}
      />
    </MuiIconButton>
  );
};

Icon.propTypes = {
  Component: PropTypes.elementType.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  sx: PropTypes.object,
};

Icon.defaultProps = {
  size: 'medium',
  onClick: null,
  disabled: false,
  sx: {},
};

export default Icon;
