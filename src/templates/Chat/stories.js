import React from 'react';
import { Box } from '@mui/system';
import AppThemeProvider from 'providers/Theme';
import Component from './view';

export default {
  title: 'Templates/Chat',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Box sx={{ width: 700, height: '100vh', position: 'absolute', right: 0 }}>
      <Component {...args} />
    </Box>
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  conversationOptions: [
    {
      id: 0,
      image: require('assets/mockPhoto.jpg'),
    },
    {
      id: 1,
      image: require('assets/mockPhoto.jpg'),
    },
    {
      id: 2,
      image: require('assets/mockPhoto.jpg'),
    },
  ],
  activeConversationId: 1,
};

export { Default };
