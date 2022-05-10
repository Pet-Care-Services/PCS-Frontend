import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Advertisement',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Advertisement = Template.bind({});

Advertisement.args = {
  activities: ['Walking', 'Feeding', 'SthElse'],
  animals: ['Cat', 'Dog', 'Fish', 'Horse'],
  starsValue: 4,
  price: {
    from: 10,
    to: 20,
    priceType: 'hourly',
  },
};

export { Advertisement };
