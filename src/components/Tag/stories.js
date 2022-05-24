import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/Tag',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});
const WithColors = Template.bind({});

Default.args = {
  label: 'Walking',
};

WithColors.args = {
  label: 'Dog',
  color: '#b74fd6',
  labelColor: '#ffffff',
};

export { Default, WithColors };
