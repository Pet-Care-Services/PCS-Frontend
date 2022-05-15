import React from 'react';
import { noop, toInteger } from 'lodash';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { isStringNumber } from './utils';

const InputView = ({
  field,
  error,
  type,
  helperText,
  label,
  isSelect,
  children,
  onlyNumbers,
  onChange,
  sx,
  ...props
}) => (
  <TextField
    {...field}
    {...props}
    onChange={(e) => {
      if (onlyNumbers && !isStringNumber(e.target.value)) {
        return;
      } else {
        if (onlyNumbers && !isEmpty(e.target.value)) {
          e.target.value = toInteger(e.target.value);
        }
        onChange(e);
      }
    }}
    select={isSelect}
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
    SelectProps={{
      MenuProps: {
        sx: {
          '.MuiMenu-paper': {
            borderRadius: 5,
          },
          '.MuiMenu-list': {
            padding: 0,
          },
        },
      },
    }}
  >
    {children}
  </TextField>
);

InputView.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.any,
  error: PropTypes.string,
  helperText: PropTypes.string,
  isSelect: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  onlyNumbers: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password']),
  sx: PropTypes.objectOf(PropTypes.any),
};

InputView.defaultProps = {
  error: '',
  helperText: '',
  type: 'text',
  isSelect: false,
  onChange: noop,
  onlyNumbers: false,
  children: null,
  sx: {},
};

export default InputView;
