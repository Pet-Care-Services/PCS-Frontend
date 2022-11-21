import { lgBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: {
    borderTopLeftRadius: 10,
    flex: 1,
    height: '100%',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    background: (theme) => theme.palette.neutral.main,
    width: '100%',
    height: 50,
    borderTopLeftRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  content: {
    width: '100%',
    flex: 1,
    backgroundColor: (theme) => theme.palette.white,
    padding: 15,
    boxSizing: 'border-box',
    rowGap: 10,
    overflowY: 'auto',
  },
  messageWrapper: (theme) => ({
    width: '70%',
    display: 'flex',

    [lgBreakpoint(theme)]: {
      width: '85%',
    },
  }),
  myMessage: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
};
