import { mdBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: (theme) => ({
    alignItems: 'center',
    width: '50%',

    [mdBreakpoint(theme)]: {
      width: '100%',
    },
  }),
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start',
  },
  reviewRoot: {
    width: '100%',
    backgroundColor: (theme) => theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  reviewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  authorAndDate: {
    display: 'inline-flex',
    gap: 15,
    alignItems: 'center',
    marginTop: -10,
  },
};
