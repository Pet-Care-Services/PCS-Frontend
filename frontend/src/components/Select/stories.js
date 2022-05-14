import React from 'react';
import { Form, Formik } from 'formik';
import { omit } from 'lodash';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Select',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Formik
      initialValues={{ select: args.initialValue || '' }}
      onSubmit={() => {}}
    >
      <Form>
        <Component {...omit(args, ['initialValue'])} />
      </Form>
    </Formik>
  </AppThemeProvider>
);

const Default = Template.bind({});
const WithValue = Template.bind({});
const Error = Template.bind({});
const Helper = Template.bind({});

Default.args = {
  label: 'My select',
  name: 'select',
  options: [
    {
      label: 'Co tydzień',
      value: 'value1',
    },
    {
      label: 'Co dwa tygodnie',
      value: 'value2',
    },
  ],
};

WithValue.args = {
  ...Default.args,
  initialValue: 'value1',
};

Error.args = {
  ...Default.args,
  error: 'Please fill the field!',
};

Helper.args = {
  ...Default.args,
  helperText: 'Please provide your job name',
};

export { Default, Error, WithValue, Helper };
