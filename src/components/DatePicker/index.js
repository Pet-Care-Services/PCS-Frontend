import React from 'react';
import FormikField from 'components/FormikField';
import DatePickerView from './view';

const DatePicker = (props) => (
  <FormikField Component={DatePickerView} {...props} />
);

export default DatePicker;
