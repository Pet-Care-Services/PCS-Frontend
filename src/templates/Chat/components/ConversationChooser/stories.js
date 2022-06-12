import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Templates/Chat/ConversationChooser',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});
const WithActive = Template.bind({});

Default.args = {
  options: [
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
};

WithActive.args = {
  ...Default.args,
  activeConversationId: 1,
};

export { Default, WithActive };
