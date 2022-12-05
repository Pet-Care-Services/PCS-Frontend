import { smBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
  },
  headerText: {
    color: (theme) => theme.palette.black,
  },
  linkButton: (theme) => ({
    marginBottom: -20,
    alignSelf: 'flex-end',

    [smBreakpoint(theme)]: {
      marginBottom: -10,
    },
  }),
};
