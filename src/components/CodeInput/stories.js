import React from 'react';
import { Form, Formik } from 'formik';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/CodeInput',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Formik initialValues={{ field: '' }} onSubmit={() => {}}>
      <Form>
        <Component {...args} />
      </Form>
    </Formik>
  </AppThemeProvider>
);

const Default = Template.bind({});
const WithFastSubmit = Template.bind({});

Default.args = {
  name: 'field',
  autoFocus: true,
};

WithFastSubmit.args = {
  ...Default.args,
  fastSubmitAction: () => {
    console.log('Sending...');
  },
};

export { Default, WithFastSubmit };
