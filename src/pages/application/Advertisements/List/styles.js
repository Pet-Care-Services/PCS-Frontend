import {
  mdBreakpoint,
  smMidBreakpoint,
  xlBreakpoint,
} from 'hooks/useBreakpoints';

const MAP_RIGHT_WIDTH = 400;

export default {
  root: (theme) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: 20,

    [mdBreakpoint(theme)]: {
      gap: 10,
    },
    [smMidBreakpoint(theme)]: {
      flexDirection: 'column',
    },
  }),
  filtersWrapper: (theme) => ({
    position: 'relative',
    width: 380,
    minWidth: 380,

    [mdBreakpoint(theme)]: {
      width: 300,
      minWidth: 300,
    },
    [smMidBreakpoint(theme)]: {
      width: '100%',
    },
  }),
  filters: (theme) => ({
    position: 'fixed',

    [smMidBreakpoint(theme)]: {
      position: 'static',
    },
  }),
  contentWrapper: {
    zIndex: 1,
    flex: 1,
    transition: (theme) => theme.transition.normal,
  },
  contentExpandedOnMapArea: {
    marginRight: -MAP_RIGHT_WIDTH,
  },
  flexColumn: (theme) => ({
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
  mapWrapper: (theme) => ({
    width: '100%',
    height: MAP_RIGHT_WIDTH,
    margin: (theme) => theme.spacing(15, 0),

    [xlBreakpoint(theme)]: {
      width: MAP_RIGHT_WIDTH,
      height: 'calc(100vh - 120px)',
    },
  }),
  map: {
    borderRadius: 10,
    marginTop: -5,
  },
  mapCollapse: (theme) => ({
    transition: (theme) => theme.transition.normal,
    margin: theme.spacing(-10, 0),

    [xlBreakpoint(theme)]: {
      position: 'fixed',
    },
    [mdBreakpoint(theme)]: {
      margin: theme.spacing(-5, 0),
    },
  }),
  mapShifted: {
    marginLeft: (theme) => `${theme.spacing(MAP_RIGHT_WIDTH)} !important`,
  },
  loadMoreLoader: {
    marginTop: 10,
  },
  mapOnRightWrapper: {
    width: MAP_RIGHT_WIDTH,
    height: '100%',
    position: 'relative',
  },
};
