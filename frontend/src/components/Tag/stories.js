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
  label: 'primary',
  color: '#333fe5',
};

Secondary.args = {
  label: 'secondary',
  color: '#c96161',
};

export { Primary, Secondary };
