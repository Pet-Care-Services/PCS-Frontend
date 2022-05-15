/* eslint-disable react/prop-types */
import React from 'react';
import { isString, keys, map } from 'lodash';
import { Typography as MUITypography } from '@mui/material';
import { Box } from '@mui/system';
import AppThemeProvider from 'providers/Theme';
import { lightColors, darkColors } from './theme';

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
    <MUITypography>{name}</MUITypography>
  </Box>
);

const ListedColors = ({ colors }) => {
  const palette = map(keys(colors), (name) => (
    <Box sx={{ marginBottom: 20, marginTop: 20 }}>
      <MUITypography variant="h2" sx={{ marginBottom: 20 }}>
        {name}
      </MUITypography>
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

const Component = ({ variant }) => {
  let content;
  if (variant === 'palette') {
    content = (
      <Box>
        <MUITypography variant="h1">Light theme:</MUITypography>
        <ListedColors colors={lightColors} />
        <MUITypography variant="h1">Dark theme:</MUITypography>
        <ListedColors colors={darkColors} />
      </Box>
    );
  } else if (variant === 'typography') {
    const variants = ['h1', 'h2', 'h3', 'h4', 'body', 'tiny'];
    content = (
      <Box>
        {map(variants, (v) => (
          <MUITypography
            variant={v}
            sx={{ marginBottom: 20, display: 'block' }}
          >
            Typography variant {v}
          </MUITypography>
        ))}
      </Box>
    );
  }

  return content;
};

export default {
  title: 'Configuration/Theme',
  component: Component,
};

const Template = (args) => (
  <AppThemeProvider>
    <Component {...args} />
  </AppThemeProvider>
);

const Palette = Template.bind({});
const Typography = Template.bind({});

Palette.args = {
  variant: 'palette',
};

Typography.args = {
  variant: 'typography',
};

export { Palette, Typography };
