import { mdBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: (theme) => ({
    width: 380,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    boxSizing: 'border-box',

    [mdBreakpoint(theme)]: {
      width: 300,
      padding: 15,
    },
  }),
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 15,
  },
  horizontalFieldsWrapper: {
    display: 'flex',
    columnGap: 10,
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    columnGap: 10,
  },
};
