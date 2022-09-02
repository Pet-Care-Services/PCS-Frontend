import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import MUISnackbar from '@mui/material/Snackbar';

const Snackbar = ({ open, message, onClose }) => {
  return (
    <MUISnackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      onClose={onClose}
      message={message}
      autoHideDuration={5000}
      onClick={onClose}
      ContentProps={{
        sx: {
          cursor: 'pointer',
          borderRadius: (theme) => theme.borderRadius.tiny,
        },
      }}
    />
  );
};

Snackbar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  message: PropTypes.node,
};

Snackbar.defaultProps = {
  onClose: noop,
  open: false,
  message: null,
};

export default Snackbar;
