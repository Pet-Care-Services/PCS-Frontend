import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/TextAvailability',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  availabilities: [
    {
      from: '2022-10-17T13:00:00.000Z',
      to: '2022-10-19T13:00:00.000Z',
      cyclic: false,
    },
    {
      from: '2022-10-19T12:00:00.000Z',
      to: '2022-10-19T14:00:00.000Z',
      cyclic: true,
      period: 'WEEK',
    },
    {
      from: '2022-10-20T12:00:00.000Z',
      to: '2022-10-20T18:00:00.000Z',
      cyclic: true,
      period: 'MONTH',
    },
  ],
};

export { Default };
