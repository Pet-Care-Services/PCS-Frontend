import { mdBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: (theme) => ({
    width: 'inherit',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    boxSizing: 'border-box',

    [mdBreakpoint(theme)]: {
      padding: 15,
    },
  }),
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 15,
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    columnGap: 10,
  },
  collapse: {
    borderRadius: (theme) => theme.borderRadius.small,
  },
  expandIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
};
