import React from 'react';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/Message',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Short = Template.bind({});
const MiddleLength = Template.bind({});
const Long = Template.bind({});
const MyMessage = Template.bind({});

Short.args = {
  children: 'Dobrze, niech będzie.',
};

MiddleLength.args = {
  children: 'Czy jest szansa na niższą kwotę? Byłoby super..',
};

Long.args = {
  children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but also the leap into 
    electronic typesetting, remaining essentially unchanged.`,
};

MyMessage.args = {
  ...MiddleLength.args,
  isMyMessage: true,
};

export { Short, MiddleLength, Long, MyMessage };
