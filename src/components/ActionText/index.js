import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import sxShape from 'shapes/sxShape';

const ActionText = ({ onClick, children, isTypography, sx }) => {
  const Component = isTypography ? Typography : Box;

  return (
    <Component
      variant="h4"
      onClick={onClick}
      sx={[
        {
          color: (theme) => theme.palette.action.main,
          cursor: 'pointer',
        },
        sx,
      ]}
    >
      {children}
    </Component>
  );
};

ActionText.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  sx: sxShape,
  isTypography: PropTypes.bool,
};

ActionText.defaultProps = {
  onClick: noop,
  isTypography: true,
  sx: {},
};

export default ActionText;
