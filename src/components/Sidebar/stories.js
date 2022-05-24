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
  open: true,
  items: [
    {
      id: 0,
      titleKey: 'services',
      Icon: HelpIcon,
      onClick: action('onClick'),
    },
    {
      id: 1,
      titleKey: 'requests',
      Icon: HelpIcon,
      onClick: action('onClick'),
    },
    {
      id: 2,
      titleKey: 'history',
      Icon: HelpIcon,
      onClick: action('onClick'),
    },
    {
      id: 3,
      titleKey: 'newAdvertisement',
      Icon: HelpIcon,
      onClick: action('onClick'),
    },
    {
      id: 4,
      titleKey: 'account',
      Icon: HelpIcon,
      onClick: action('onClick'),
    },
  ],
};
export { Default };
