import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Tag',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Primary = Template.bind({});
const Secondary = Template.bind({});

Primary.args = {
  label: 'Walking',
  color: '#B9D2BE',
};

Secondary.args = {
  label: 'Dog',
  color: '#E2F1E5',
  labelColor: '#cc1515',
};

export { Primary, Secondary };
