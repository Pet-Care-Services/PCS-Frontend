import { smBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    textAlign: 'center',
  },
  codeInput: {
    marginTop: 20,
    marginBottom: 20,
  },
  linksWrapper: (theme) => ({
    width: '100%',
    marginBottom: -20,
    display: 'flex',
    justifyContent: 'space-between',

    [smBreakpoint(theme)]: {
      marginBottom: -10,
    },
  }),
  rightLinkButton: {
    alignSelf: 'flex-end',
  },
};
