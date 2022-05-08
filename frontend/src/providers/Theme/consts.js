const MODE = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
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
  },
  neutral: {
    light: '#fcfcfc',
    main: '#f2f2f2',
    dark: '#d4d4d4',
  },
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
  },
  neutral: {
    light: '#fcfcfc',
    main: '#f2f2f2',
    dark: '#d4d4d4',
  },
};

const common = {
  spacing: 1,
  typography: {
    fontFamily: ['Work Sans', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 20,
    },
    h3: {
      fontSize: 16,
    },
    h4: {
      fontSize: 14,
    },
    body: {
      fontSize: 12,
    },
    tiny: {
      fontSize: 10,
    },
  },
  shape: {
    borderRadius: 1,
  },
};

const lightTheme = {
  ...common,
  palette: lightColors,
};

const darkTheme = {
  ...common,
  palette: darkColors,
};

export { MODE, lightTheme, darkTheme };
