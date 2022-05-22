import React from 'react';
import { action } from '@storybook/addon-actions';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Icon',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});
const Small = Template.bind({});
const Large = Template.bind({});
const Clickable = Template.bind({});

Default.args = {
  Component: AccessAlarmsIcon,
  onClick: null,
};

Small.args = {
  ...Default.args,
  size: 'small',
};

Large.args = {
  ...Default.args,
  size: 'large',
};

Clickable.args = {
  ...Default.args,
  onClick: action('onClick'),
};

export { Default, Small, Large, Clickable };
