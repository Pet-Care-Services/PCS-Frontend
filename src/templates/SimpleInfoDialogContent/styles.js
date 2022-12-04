import { smBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: (theme) => theme.palette.black,
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
  information: {
    marginTop: 20,
    marginBottom: 20,
  },
};
