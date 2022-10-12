import React from 'react';
import { Form, Formik } from 'formik';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/AvailabilityGraph',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    {/* <Formik initialValues={{ field: '' }} onSubmit={() => {}}>
      <Form> */}
    <Component {...args} />
    {/* </Form>
    </Formik> */}
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  dateFrom: new Date('10/10/2022'),
  dateTo: new Date('10/16/2022'),
  daysAvailabilities: {
    monday: [
      { from: '00:00:00', to: '00:15:00' },
      { from: '10:00:00', to: '10:15:00' },
      { from: '10:15:00', to: '10:30:00' },
      { from: '10:30:00', to: '10:45:00' },
      { from: '23:45:00', to: '00:00:00' },
    ],
    tuesday: [],
    wednesday: [],
    thursday: [{ from: '12:00:00', to: '12:15:00' }],
    friday: [],
    saturday: [],
    sunday: [],
  },
};

export { Default };
