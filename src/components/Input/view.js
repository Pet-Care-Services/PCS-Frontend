import React, { forwardRef } from 'react';
import { useFormikContext } from 'formik';
import { noop, toInteger } from 'lodash';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import stringOrNumberShape from 'shapes/stringOrNumberShape';
import { isStringNumber } from './utils';

// eslint-disable-next-line react/display-name
const InputView = forwardRef(
  (
    {
      field,
      name,
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
      actAsClickable,
      multiline,
      maxLength,
      onClick,
      sx,
      ...props
    },
    ref
  ) => {
    const { setFieldValue } = useFormikContext();
    const borderDefaultStyle = {
      borderColor: (theme) => theme.palette.neutral.dark,
      borderWidth: 1,
    };

    return (
      <TextField
        {...field}
        {...props}
        name={name}
        ref={ref}
        value={value}
        onChange={(e) => {
          if (onlyNumbers && !isStringNumber(e.target.value)) {
            return;
          } else {
            if (onlyNumbers && !isEmpty(e.target.value)) {
              e.target.value = toInteger(e.target.value);
            }
            setFieldValue(name, e.target.value);
            onChange(e);
          }
        }}
        select={isSelect}
        type={type}
        label={label}
        error={!isEmpty(error)}
        helperText={error || helperText}
        multiline={multiline}
        minRows={2}
        maxRows={999}
        variant="outlined"
        sx={{
          width: '100%',
          ...sx,
        }}
        inputProps={{
          onClick,
          maxLength,
        }}
        InputProps={{
          readOnly: actAsClickable,
          endAdornment,
          sx: {
            color: (theme) => theme.palette.black,
            height: !multiline && 50,
            minHeight: 50,
            padding: multiline ? 16 : 0,
            borderRadius: (theme) => theme.borderRadius.tiny,
            ...(rounded && {
              borderRadius: (theme) => theme.borderRadius.medium,
            }),
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
            ...(small && { height: 35, minHeight: 35 }),
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
                borderRadius: (theme) => theme.borderRadius.tiny,
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
  }
);

InputView.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  field: PropTypes.any,
  error: PropTypes.string,
  helperText: PropTypes.string,
  isSelect: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  onlyNumbers: PropTypes.bool,
  maxLength: PropTypes.number,
  small: PropTypes.bool,
  shrink: PropTypes.bool,
  noBorderEffects: PropTypes.bool,
  rounded: PropTypes.bool,
  actAsClickable: PropTypes.bool,
  multiline: PropTypes.bool,
  onClick: PropTypes.func,
  endAdornment: PropTypes.node,
  value: stringOrNumberShape,
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
  onClick: noop,
  onlyNumbers: false,
  maxLength: null,
  small: false,
  shrink: true,
  noBorderEffects: false,
  rounded: false,
  actAsClickable: false,
  multiline: false,
  endAdornment: null,
  children: null,
  sx: {},
};

export default InputView;
