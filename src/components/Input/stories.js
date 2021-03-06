import React from 'react';
import { Form, Formik } from 'formik';
import { omit } from 'lodash';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/Input',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Formik
      initialValues={{ inputName: args.initialValue || '' }}
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
const TextArea = Template.bind({});

Default.args = {
  label: 'My input',
  name: 'inputName',
};

WithValue.args = {
  ...Default.args,
  initialValue: 'Some value',
};

Error.args = {
  ...Default.args,
  error: 'Please fill the field!',
};

Helper.args = {
  ...Default.args,
  helperText: 'Please provide full animal breed',
};

TextArea.args = {
  ...Default.args,
  multiline: true,
};

export { Default, WithValue, Error, Helper, TextArea };
