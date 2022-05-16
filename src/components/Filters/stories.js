import React from 'react';
import { Box } from '@mui/system';
import AppThemeProvider from 'providers/Theme';
import Component from '.';
import { FIELD_TYPES } from './components/Field/consts';

export default {
  title: 'Filters',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Box sx={{ width: 380 }}>
      <Component {...args} />
    </Box>
  </AppThemeProvider>
);

const Default = Template.bind({});

Default.args = {
  rows: [
    {
      name: 'myinput',
      label: 'My input',
      fieldType: FIELD_TYPES.INPUT,
    },
    [
      {
        name: 'leftinput',
        label: 'Left input',
        fieldType: FIELD_TYPES.INPUT,
      },
      {
        name: 'rightinput',
        label: 'Right input',
        fieldType: FIELD_TYPES.INPUT,
      },
    ],
    {
      name: 'myselect',
      label: 'My select',
      fieldType: FIELD_TYPES.SELECT,
      fieldProps: {
        options: [
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
        ],
      },
    },
  ],
  initialValues: {
    myinput: '',
    leftinput: '',
    rightinput: '',
    myselect: '',
  },
};

export { Default };
