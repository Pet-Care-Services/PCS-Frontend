const MODE = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

const NO_COLOR = '#ff42ec';
const BLACK = '#000000';
const WHITE = '#ffffff';

const lightColors = {
  primary: {
    contrastText: WHITE,
    light: NO_COLOR,
    main: '#5A9A9E',
    dark: '#27888E',
  },
  secondary: {
    contrastText: BLACK,
    light: NO_COLOR,
    main: '#E2F1E5',
    dark: '#B9D2BE',
  },
  neutral: {
    light: NO_COLOR,
    main: '#F3F4F3',
    dark: '#A2A2A2',
  },
  error: {
    light: NO_COLOR,
    main: NO_COLOR,
    dark: '#B00020',
  },
  white: WHITE,
  black: BLACK,
};

const darkColors = {
  primary: {
    contrastText: WHITE,
    light: NO_COLOR,
    main: NO_COLOR,
    dark: NO_COLOR,
  },
  secondary: {
    contrastText: WHITE,
    light: NO_COLOR,
    main: NO_COLOR,
    dark: NO_COLOR,
  },
  neutral: {
    light: NO_COLOR,
    main: NO_COLOR,
    dark: NO_COLOR,
  },
  error: {
    light: NO_COLOR,
    main: NO_COLOR,
    dark: NO_COLOR,
  },
  white: WHITE,
  black: BLACK,
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

export { MODE, lightTheme, darkTheme, lightColors, darkColors };
