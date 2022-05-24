import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/PriceRange',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Single = Template.bind({});
const SingleInterval = Template.bind({});
const Hourly = Template.bind({});
const HourlyInterval = Template.bind({});

Single.args = {
  from: 10,
};

SingleInterval.args = {
  from: 10,
  to: 25,
};

Hourly.args = {
  from: 20,
  type: 'hourly',
};

HourlyInterval.args = {
  from: 20,
  to: 30,
  type: 'hourly',
};

export { Single, SingleInterval, Hourly, HourlyInterval };
