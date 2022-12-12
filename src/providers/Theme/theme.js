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
    contrastText: WHITE,
    dark: '#0d5991',
    main: '#2579B7',
    light: '#61bcff',
  },
  white: WHITE,
  forceWhite: WHITE,
  black: BLACK,
  forceBlack: BLACK,
  placeholder: '#7d7d7d',
};

const darkColors = {
  primary: {
    contrastText: WHITE,
    light: '#747b7d',
    main: '#485659',
    dark: '#262e30',
  },
  secondary: {
    contrastText: WHITE,
    light: NO_COLOR,
    main: '#494d49',
    dark: '#2e3830',
  },
  neutral: {
    contrastText: WHITE,
    light: NO_COLOR,
    main: '#666666',
    dark: '#363636',
  },
  error: lightColors.error,
  action: lightColors.action,
  white: BLACK,
  forceWhite: WHITE,
  black: WHITE,
  forceBlack: BLACK,
  placeholder: WHITE,
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
      fontWeight: 300,
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
  borderRadius: {
    tiny: 5,
    small: 10,
    medium: 25,
    infinite: 9999,
  },
  shape: {
    borderRadius: 1,
  },
  transition: { normal: '0.5s', fast: '0.2s' },
  breakpoints: {
    values: {
      xs: 480,
      sm: 600,
      smMid: 850,
      md: 1024,
      lg: 1280,
      xl: 1720,
    },
  },
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
