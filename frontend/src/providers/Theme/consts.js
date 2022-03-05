const MODE = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
};

const lightColors = {
  primary: {
    contrastText: 'white',
    light: '#91ffa2',
    main: '#14db32',
    dark: '#0d801e',
  },
  secondary: {
    contrastText: 'white',
    light: '#ffe180',
    main: '#c79f1e',
    dark: '#80650d',
  }
};

const darkColors = {
  primary: {
    contrastText: 'white',
    light: '#91ffa2',
    main: '#14db32',
    dark: '#0d801e',
  },
  secondary: {
    contrastText: 'white',
    light: '#ffe180',
    main: '#c79f1e',
    dark: '#80650d',
  }
};

const common = {
  spacing: 1,
  fontSize: {
    tiny: 10,
    small: 12,
    medium: 14,
    big: 16,
    huge: 20,
  }
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