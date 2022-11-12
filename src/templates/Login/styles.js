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
  linkButton: (theme) => ({
    marginBottom: -20,
    alignSelf: 'flex-end',

    [smBreakpoint(theme)]: {
      marginBottom: -10,
    },
  }),
};
