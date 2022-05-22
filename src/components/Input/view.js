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
  value,
  endAdornment,
  small,
  shrink,
  noBorderEffects,
  rounded,
  sx,
  ...props
}) => {
  const borderDefaultStyle = {
    borderColor: (theme) => theme.palette.neutral.dark,
    borderWidth: 1,
  };

  return (
    <TextField
      {...field}
      {...props}
      value={value}
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
        endAdornment,
        sx: {
          height: 50,
          padding: 0,
          borderRadius: 5,
          ...(rounded && { borderRadius: 15 }),
          backgroundColor: (theme) => theme.palette.white,
          '&.MuiOutlinedInput-root': {
            '.MuiOutlinedInput-notchedOutline': {
              ...borderDefaultStyle,
            },
            '&.Mui-focused': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: (theme) => theme.palette.primary.main,
                borderWidth: 2,
                ...(noBorderEffects && borderDefaultStyle),
              },
            },
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: (theme) => theme.palette.primary.main,
                ...(noBorderEffects && borderDefaultStyle),
              },
            },
          },
          ...(small && { height: 35 }),
        },
      }}
      FormHelperTextProps={{
        sx: {
          margin: 0,
          fontSize: (theme) => theme.typography.tiny,
        },
      }}
      InputLabelProps={{
        shrink: shrink ? undefined : false,
        sx: {
          ...(!shrink && value !== '' && { opacity: 0 }),
          transform: 'translate(14px, 14px) scale(1)',
          ...(!shrink && { transform: 'translate(14px, 7px) scale(1)' }),
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
};

InputView.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.any,
  error: PropTypes.string,
  helperText: PropTypes.string,
  isSelect: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  onlyNumbers: PropTypes.bool,
  small: PropTypes.bool,
  shrink: PropTypes.bool,
  noBorderEffects: PropTypes.bool,
  rounded: PropTypes.bool,
  endAdornment: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['text', 'password']),
  sx: PropTypes.objectOf(PropTypes.any),
};

InputView.defaultProps = {
  value: '',
  error: '',
  helperText: '',
  type: 'text',
  isSelect: false,
  onChange: noop,
  onlyNumbers: false,
  small: false,
  shrink: true,
  noBorderEffects: false,
  rounded: false,
  endAdornment: null,
  children: null,
  sx: {},
};

export default InputView;
