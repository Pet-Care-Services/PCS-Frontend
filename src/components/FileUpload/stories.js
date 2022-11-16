import React from 'react';
import { Form, Formik } from 'formik';
import SnackbarProvider from 'providers/Snackbar';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/FileUpload',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <SnackbarProvider>
      <Formik initialValues={{ field: {} }} onSubmit={() => {}}>
        <Form>
          <Component {...args} />
        </Form>
      </Formik>
    </SnackbarProvider>
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  label: 'Choose',
  name: 'field',
};

export { Default };
