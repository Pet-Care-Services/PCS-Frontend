import React from 'react';
import { action } from '@storybook/addon-actions';
import HelpIcon from '@mui/icons-material/Help';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/Sidebar',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  items: [
    {
      titleKey: 'services',
      Icon: HelpIcon,
      onClick: action('onClick'),
    },
    {
      titleKey: 'requests',
      Icon: HelpIcon,
      onClick: action('onClick'),
    },
    {
      titleKey: 'history',
      Icon: HelpIcon,
      onClick: action('onClick'),
    },
    {
      titleKey: 'newAdvertisement',
      Icon: HelpIcon,
      onClick: action('onClick'),
    },
    {
      titleKey: 'account',
      Icon: HelpIcon,
      onClick: action('onClick'),
    },
  ],
};
export { Default };
