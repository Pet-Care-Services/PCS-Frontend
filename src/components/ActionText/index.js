import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const ActionText = ({ onClick, children, sx }) => {
  return (
    <Typography
      variant="h4"
      onClick={onClick}
      sx={{
        color: (theme) => theme.palette.action.main,
        cursor: 'pointer',
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

ActionText.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

ActionText.defaultProps = {
  onClick: noop,
  sx: {},
};

export default ActionText;
