import React from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const InputView = ({ field, error, type, helperText, label, sx, ...props }) => (
  <TextField
    {...field}
    {...props}
    type={type}
    label={label}
    error={!isEmpty(error)}
    helperText={error || helperText}
    variant="outlined"
    sx={{
      width: '100%',
      ...sx,
    }}
    InputProps={{
      sx: {
        height: 50,
        padding: 0,
        borderRadius: 5,
        backgroundColor: (theme) => theme.palette.white,
        '&.MuiOutlinedInput-root': {
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: (theme) => theme.palette.primary.main,
            },
          },
        },
      },
    }}
    FormHelperTextProps={{
      sx: {
        margin: 0,
        fontSize: (theme) => theme.typography.tiny,
      },
    }}
    InputLabelProps={{
      sx: {
        transform: 'translate(14px, 14px) scale(1)',
        '&.MuiInputLabel-shrink': {
          transform: 'translate(14px, -9px) scale(0.75)',
        },
      },
    }}
  />
);

InputView.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.any,
  error: PropTypes.string,
  helperText: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  sx: PropTypes.objectOf(PropTypes.any),
};

InputView.defaultProps = {
  error: '',
  helperText: '',
  type: 'text',
  sx: {},
};

export default InputView;
