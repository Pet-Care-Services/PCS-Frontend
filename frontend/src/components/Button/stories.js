import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Button',
  component: Component,
};

const Template = (args) => <AppThemeProvider><Component {...args} /></AppThemeProvider>;

const Primary = Template.bind({});
const Secondary = Template.bind({});

Primary.args = {
  color: 'primary',
  children: 'Primary',
};

Secondary.args = {
  color: 'secondary',
  children: 'Secondary',
};

export {
  Primary,
  Secondary
};