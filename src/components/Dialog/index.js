import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Dialog as MUIDialog } from '@mui/material';

const Dialog = ({ onClose, open, content }) => (
  <MUIDialog
    onClose={onClose}
    open={open}
    PaperProps={{
      sx: {
        width: 500,
        height: 'auto',
        borderRadius: (theme) => theme.borderRadius.tiny,
        padding: 40,
      },
    }}
  >
    {content}
  </MUIDialog>
);

Dialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  content: PropTypes.node,
};

Dialog.defaultProps = {
  onClose: noop,
  open: false,
  content: null,
};

export default Dialog;
