import { mdBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: (theme) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    columnGap: 20,

    [mdBreakpoint(theme)]: {
      columnGap: 10,
    },
  }),
  contentWrapper: (theme) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,

    [mdBreakpoint(theme)]: {
      rowGap: 10,
    },
  }),
  centered: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  mapWrapper: {
    width: '100%',
    height: 400,
    margin: (theme) => theme.spacing(15, 0),
  },
  map: {
    borderRadius: 10,
  },
  mapCollapse: (theme) => ({
    margin: theme.spacing(-15, 0),

    [mdBreakpoint(theme)]: {
      margin: theme.spacing(-10, 0),
    },
  }),
};
