import React from 'react';
import { Form, Formik } from 'formik';
import { omit } from 'lodash';
import AppThemeProvider from 'providers/Theme';
import Component from '.';
import ComponentView from './view';

export default {
  title: 'Components/WeekAvailability',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Formik
      initialValues={{ availability: { date: null, timeframes: [] } }}
      onSubmit={() => {}}
    >
      <Form>
        <Component {...args} />
      </Form>
    </Formik>
  </AppThemeProvider>
);

const TemplateReadOnly = (args) => (
  <AppThemeProvider>
    <ComponentView {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});
const ReadOnly = TemplateReadOnly.bind({});

Default.args = {
  name: 'availability',
  dateFrom: new Date('2022-10-09T22:00:00.000Z'),
  daysAvailabilities: {
    monday: [
      {
        from: new Date('2022-10-09T22:00:00.000Z'),
        to: new Date('2022-10-09T22:15:00.000Z'),
      },
      {
        from: new Date('2022-10-10T10:00:00.000Z'),
        to: new Date('2022-10-10T10:15:00.000Z'),
      },
      {
        from: new Date('2022-10-10T10:15:00.000Z'),
        to: new Date('2022-10-10T10:30:00.000Z'),
      },
      {
        from: new Date('2022-10-10T10:30:00.000Z'),
        to: new Date('2022-10-10T10:45:00.000Z'),
      },
      {
        from: new Date('2022-10-10T10:45:00.000Z'),
        to: new Date('2022-10-10T11:00:00.000Z'),
      },
    ],
    tuesday: [
      {
        from: new Date('2022-10-11T10:00:00.000Z'),
        to: new Date('2022-10-11T10:15:00.000Z'),
      },
      {
        from: new Date('2022-10-11T10:15:00.000Z'),
        to: new Date('2022-10-11T10:30:00.000Z'),
      },
      {
        from: new Date('2022-10-11T10:30:00.000Z'),
        to: new Date('2022-10-11T10:45:00.000Z'),
      },
      {
        from: new Date('2022-10-11T10:45:00.000Z'),
        to: new Date('2022-10-11T11:00:00.000Z'),
      },
      {
        from: new Date('2022-10-11T12:00:00.000Z'),
        to: new Date('2022-10-11T12:15:00.000Z'),
      },
      {
        from: new Date('2022-10-11T12:15:00.000Z'),
        to: new Date('2022-10-11T12:30:00.000Z'),
      },
      {
        from: new Date('2022-10-11T12:30:00.000Z'),
        to: new Date('2022-10-11T12:45:00.000Z'),
      },
      {
        from: new Date('2022-10-11T12:45:00.000Z'),
        to: new Date('2022-10-11T13:00:00.000Z'),
      },
    ],
    wednesday: [],
    thursday: [
      {
        from: new Date('2022-10-13T00:00:00.000Z'),
        to: new Date('2022-10-13T00:15:00.000Z'),
      },
    ],
    friday: [],
    saturday: [],
    sunday: [],
  },
};

ReadOnly.args = {
  ...omit(Default.args, 'name'),
};

export { Default, ReadOnly };
