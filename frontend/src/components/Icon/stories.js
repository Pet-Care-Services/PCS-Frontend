import React from 'react';
import { action } from '@storybook/addon-actions';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Icon',
  component: Component,
};

const Template = (args) => <AppThemeProvider><Component {...args} /></AppThemeProvider>;

const Default = Template.bind({});
const Small = Template.bind({});
const Big = Template.bind({});
const Clickable = Template.bind({});
const Padded = Template.bind({});

Default.args = {
  Component: AccessAlarmsIcon,
  onClick: null
};

Small.args = {
  ...Default.args,
  size: 'small'
};

Big.args = {
  ...Default.args,
  size: 'big'
};

Clickable.args = {
  ...Default.args,
  onClick: action('onClick')
};

Padded.args = {
  ...Default.args,
  padded: true
};

export {
  Default,
  Small,
  Big,
  Clickable,
  Padded
};