import React from 'react';
import { Form, Formik } from 'formik';
import { omit } from 'lodash';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/Autocomplete',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Formik
      initialValues={{ country: args.initialValue || '' }}
      onSubmit={() => {}}
    >
      <Form>
        <Component {...omit(args, ['initialValue'])} />
      </Form>
    </Formik>
  </AppThemeProvider>
);

const options = [
  {
    value: 0,
    label: 'Poland',
  },
  {
    value: 1,
    label: 'Germany',
  },
  {
    value: 2,
    label: 'France',
  },
];

const Default = Template.bind({});
const WithValue = Template.bind({});
const WithOptions = Template.bind({});
const Error = Template.bind({});
const Helper = Template.bind({});
const Loading = Template.bind({});

Default.args = {
  options: [],
  label: 'Country',
  name: 'country',
  minLengthToSearch: 3,
  onChange: () => null,
};

WithValue.args = {
  ...Default.args,
  initialValue: 'Some value',
};

WithOptions.args = {
  ...Default.args,
  options,
};

Error.args = {
  ...Default.args,
  error: 'Please fill the field!',
};

Helper.args = {
  ...Default.args,
  helperText: 'Please provide full name of the country!',
  options,
};

Loading.args = {
  ...Default.args,
  isLoading: true,
};

export { Default, WithValue, WithOptions, Error, Helper, Loading };
