import React from 'react';
import { truncate } from 'lodash';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import { MenuItem } from '@mui/material';
import InputView from 'components/Input/view';
import optionsShape from 'shapes/optionsShape';
import sxShape from 'shapes/sxShape';

const Select = ({ field, options, ...props }) => (
  <InputView {...field} {...props} isSelect>
    {map(options, ({ value, label }) => (
      <MenuItem
        value={value}
        key={value}
        sx={{
          height: 45,
          '&:hover': {
            backgroundColor: (theme) => theme.palette.neutral.main,
            color: (theme) => theme.palette.neutral.contrastText,
          },
          '&.Mui-selected': {
            '&:hover': {
              backgroundColor: (theme) => theme.palette.primary.main,
            },
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.primary.contrastText,
          },
        }}
      >
        {truncate(label, { length: 30 })}
      </MenuItem>
    ))}
  </InputView>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.any,
  error: PropTypes.string,
  helperText: PropTypes.string,
  options: optionsShape.isRequired,
  sx: sxShape,
};

Select.defaultProps = {
  error: '',
  helperText: '',
  sx: {},
};

export default Select;
