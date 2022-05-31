import React from 'react';
import { action } from '@storybook/addon-actions';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/ImageButton/InsideVariant',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});
const Faded = Template.bind({});

Default.args = {
  img: 'https://kc-media-cdn-live.azureedge.net/cache/c/a/e/a/e/8/caeae869c0de3434abd5aef733abd4d9df061847.jpg',
  title: 'Some title',
  onClick: action('onClick'),
};

Faded.args = {
  ...Default.args,
  faded: true,
};

export { Default, Faded };
