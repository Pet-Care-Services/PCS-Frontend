import React from 'react';
import { Form, Formik } from 'formik';
import { omit } from 'lodash';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/DatePicker',
  component: Component,
};

const Template = (args) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <AppThemeProvider>
      <Formik
        initialValues={{ date: args.initialValue || '' }}
        onSubmit={() => null}
      >
        <Form>
          <Component {...omit(args, ['initialValue'])} />
        </Form>
      </Formik>
    </AppThemeProvider>
  </LocalizationProvider>
);

const Default = Template.bind({});
const WithValue = Template.bind({});
const Error = Template.bind({});
const Helper = Template.bind({});

Default.args = {
  label: 'My Date Picker',
  name: 'date',
};

WithValue.args = {
  ...Default.args,
  initialValue: '06/09/2022 07:35 am',
};

Error.args = {
  ...Default.args,
  error: 'Please fill the field!',
};

Helper.args = {
  ...Default.args,
  helperText: 'Please provide the date',
};

export { Default, WithValue, Error, Helper };
