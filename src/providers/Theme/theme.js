const MODE = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

const NO_COLOR = '#ff42ec';
const BLACK = '#0d1617';
const WHITE = '#ffffff';

const lightColors = {
  primary: {
    contrastText: WHITE,
    light: '#9dc0c2',
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
    contrastText: BLACK,
    light: NO_COLOR,
    main: '#F3F4F3',
    dark: '#A2A2A2',
  },
  error: {
    contrastText: WHITE,
    light: NO_COLOR,
    main: '#e30b32',
    dark: '#B00020',
  },
  action: {
    dark: NO_COLOR,
    main: '#2579B7',
    light: NO_COLOR,
  },
  white: WHITE,
  black: BLACK,
  placeholder: '#7d7d7d',
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
  action: {
    main: NO_COLOR,
  },
  white: WHITE,
  black: BLACK,
  placeholder: '#7d7d7d',
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
  transition: '0.5s',
};

const decoratePalette = (colors) => ({
  ...colors,
  background: {
    default: colors.secondary.main,
  },
});

const lightTheme = {
  ...common,
  palette: decoratePalette(lightColors),
};

const darkTheme = {
  ...common,
  palette: decoratePalette(darkColors),
};

export { MODE, lightTheme, darkTheme, lightColors, darkColors };
