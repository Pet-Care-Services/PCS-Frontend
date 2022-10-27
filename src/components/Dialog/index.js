import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Dialog as MUIDialog } from '@mui/material';
import stringOrNumberShape from 'shapes/stringOrNumberShape';

const Dialog = ({ onClose, open, content, width }) => (
  <MUIDialog
    onClose={onClose}
    open={open}
    PaperProps={{
      sx: {
        width,
        maxWidth: '100%',
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
  width: stringOrNumberShape,
};

Dialog.defaultProps = {
  onClose: noop,
  open: false,
  content: null,
  width: 500,
};

export default Dialog;
