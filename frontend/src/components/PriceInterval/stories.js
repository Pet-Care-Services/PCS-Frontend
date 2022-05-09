import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'PriceInterval',
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
  price: 10,
};

SingleInterval.args = {
  price: 10,
  priceTo: 25,
};

Hourly.args = {
  price: 20,
  priceType: 'hourly',
};

HourlyInterval.args = {
  price: 20,
  priceTo: 30,
  priceType: 'hourly',
};

export { Single, SingleInterval, Hourly, HourlyInterval };
