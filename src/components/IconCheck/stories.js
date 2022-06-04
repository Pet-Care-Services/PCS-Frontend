import React from 'react';
import { Form, Formik } from 'formik';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/IconCheck',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Formik initialValues={{ field: false }} onSubmit={() => {}}>
      <Form>
        <Component {...args} />
      </Form>
    </Formik>
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  Component: AccessibilityNewIcon,
  name: 'field',
};

export { Default };
