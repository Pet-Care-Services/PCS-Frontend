/* eslint-disable react/prop-types */
import React from 'react';
import { isString, keys, map } from 'lodash';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import AppThemeProvider from 'providers/Theme';
import { lightColors, darkColors } from './consts';

const Color = ({ color, name }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: 10,
    }}
  >
    <Box
      sx={{
        width: 70,
        height: 70,
        borderRadius: '50%',
        border: '2px solid black',
        backgroundColor: color,
      }}
    />
    <Typography>{name}</Typography>
  </Box>
);

const ListedColors = ({ colors }) => {
  const palette = map(keys(colors), (name) => (
    <Box sx={{ marginBottom: 20, marginTop: 20 }}>
      <Typography variant="h2" sx={{ marginBottom: 20 }}>
        {name}
      </Typography>
      <Box sx={{ display: 'flex', columnGap: 20 }}>
        {isString(colors[name]) ? (
          <Color color={colors[name]} name={name} />
        ) : (
          map(keys(colors[name]), (colorName) => (
            <Color color={colors[name][colorName]} name={colorName} />
          ))
        )}
      </Box>
    </Box>
  ));

  return <Box sx={{ marginBottom: 100 }}>{palette}</Box>;
};

const Palette = () => (
  <Box>
    <Typography variant="h1">Light theme:</Typography>
    <ListedColors colors={lightColors} />
    <Typography variant="h1">Dark theme:</Typography>
    <ListedColors colors={darkColors} />
  </Box>
);

export default {
  title: 'Configuration/Palette',
  component: Palette,
};

const Template = (args) => (
  <AppThemeProvider>
    <Palette {...args} />
  </AppThemeProvider>
);

const Default = Template.bind({});

export { Default };
