const MODE = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
};

const lightColors = {
  primary: {
    light: '#91ffa2',
    main: '#14db32',
    dark: '#0d801e',
  },
  secondary: {
    light: '#ffe180',
    main: '#c79f1e',
    dark: '#80650d',
  }
};

const darkColors = {
  primary: {
    light: '#91ffa2',
    main: '#14db32',
    dark: '#0d801e',
  },
  secondary: {
    light: '#ffe180',
    main: '#c79f1e',
    dark: '#80650d',
  }
};

const common = {
  spacing: 1
};

const lightTheme = {
  ...common,
  palette: lightColors
};

const darkTheme = {
  ...common,
  palette: darkColors
};

export {
  MODE,
  lightTheme,
  darkTheme
};