import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MuiIconButton from '@mui/material/IconButton';
import { sizes } from './consts';

const Icon = ({
  size,
  Component,
  onClick,
  disabled,
  active,
  componentProps,
  sx,
}) => {
  const dimension = sizes[size];

  return (
    <MuiIconButton
      size={size}
      color="inherit"
      onClick={onClick}
      disabled={disabled}
      disableRipple={!onClick || active}
      sx={{
        ...{ width: dimension.box, height: dimension.box },
        ...(!onClick && { cursor: 'inherit', padding: 0 }),
        ...(active && {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.white,
        }),
        ...sx,
      }}
    >
      <Box
        component={Component}
        {...componentProps}
        sx={{
          width: dimension.icon,
          height: dimension.icon,
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
  active: PropTypes.bool,
  componentProps: PropTypes.object,
  sx: PropTypes.object,
};

Icon.defaultProps = {
  size: 'medium',
  onClick: null,
  disabled: false,
  active: false,
  componentProps: {},
  sx: {},
};

export default Icon;
