import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { sizes } from './consts';

const Icon = ({ size, padded, Component, onClick, sx }) => {
  const dimension = sizes[size];

  return (
    <Box
      sx={{
        width: dimension,
        height: dimension,
        transition: '0.2s',
        ...((padded || onClick) && {
          padding: 10,
          borderRadius: '50%',
          backgroundColor: 'neutral.main',
        }),
        ...(onClick && {
          cursor: 'pointer',
          backgroundColor: 'none',
          '&:hover': {
            backgroundColor: 'neutral.main',
          },
        }),
        ...sx,
      }}
      onClick={onClick}
    >
      <Component
        sx={{
          width: dimension,
          height: dimension,
        }}
      />
    </Box>
  );
};

Icon.propTypes = {
  Component: PropTypes.elementType.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  onClick: PropTypes.func,
  padded: PropTypes.bool,
  sx: PropTypes.object,
};

Icon.defaultProps = {
  size: 'medium',
  onClick: null,
  padded: false,
  sx: {},
};

export default Icon;
