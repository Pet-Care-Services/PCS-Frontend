import React from 'react';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AppThemeProvider from 'providers/Theme';
import Component from '.';

export default {
  title: 'Components/Sidebar/Item',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  Icon: AssignmentTurnedInIcon,
  title: 'Usługi',
};

export { Default };
