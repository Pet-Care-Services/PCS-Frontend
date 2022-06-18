import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputView from 'components/Input/view';
import { inputFormats, views } from './consts';

const DatePickerView = ({ field, name, withTime, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [open, setOpen] = useState(false);

  return (
    <DateTimePicker
      {...props}
      renderInput={(p) => {
        return (
          <InputView
            {...field}
            {...props}
            ref={p.inputRef}
            value={p.inputProps.value}
            name={name}
            endAdornment={
              <Box sx={{ marginRight: 20 }} onClick={() => setOpen(true)}>
                {p.InputProps.endAdornment}
              </Box>
            }
            onClick={() => setOpen(true)}
            actAsClickable
          />
        );
      }}
      onChange={(value) => {
        setFieldValue(name, value);
      }}
      views={views[withTime ? 'withTime' : 'onlyDate']}
      ampm={false}
      inputFormat={inputFormats[withTime ? 'withTime' : 'onlyDate']}
      open={open}
      onClose={() => setOpen(false)}
      minutesStep={5}
      mask={null}
    />
  );
};

DatePickerView.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.any,
  withTime: PropTypes.bool,
};

DatePickerView.defaultProps = {
  withTime: true,
};

export default DatePickerView;
