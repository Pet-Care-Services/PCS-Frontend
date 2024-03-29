import {
  lgBreakpoint,
  mdBreakpoint,
  smBreakpoint,
  xsBreakpoint,
} from 'hooks/useBreakpoints';

export default {
  contactButton: {
    width: 300,
    marginTop: 10,
  },
  collapse: {
    borderRadius: (theme) => theme.borderRadius.small,
  },
  content: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: 20,
    p: 15,
    cursor: 'pointer',
    color: theme.palette.black,

    [mdBreakpoint(theme)]: {
      p: 8,
      gap: 10,
    },
  }),
  collapsedBox: (theme) => ({
    display: 'flex',
    gap: 20,

    [mdBreakpoint(theme)]: {
      gap: 10,
    },
  }),
  imageBox: (theme) => ({
    height: 140,
    width: 180,
    objectFit: 'cover',
    borderRadius: theme.borderRadius.small,

    [lgBreakpoint(theme)]: {
      width: 150,
      height: 110,
    },
    [mdBreakpoint(theme)]: {
      width: 120,
      height: 90,
    },
    [smBreakpoint(theme)]: {
      width: 80,
      height: 105,
    },
  }),
  centerColumnBox: {
    display: 'flex',
    flexGrow: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 5,
  },
  tagsBox: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 5,
  },
  locationBox: {
    display: 'flex',
    alignItems: 'center',
  },
  rightColumnBox: (theme) => ({
    display: 'flex',
    flexGrow: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

    [smBreakpoint(theme)]: {
      marginLeft: -25,
    },
  }),
  justifyEndBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  justifySpaceBetweenBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  expandedBox: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  fakeAvailabilityArea: (theme) => ({
    height: 550,

    [smBreakpoint(theme)]: {
      height: 540,
    },
    [xsBreakpoint(theme)]: {
      height: 525,
    },
  }),
  textAvailability: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
  },
  description: {
    marginBottom: 10,
  },
  locationIcon: {
    color: (theme) => theme.palette.forceBlack,
  },
  location: (theme) => ({
    width: 400,
    color: theme.palette.black,

    [lgBreakpoint(theme)]: {
      width: 200,
    },
    [mdBreakpoint(theme)]: {
      width: 150,
    },
    [smBreakpoint(theme)]: {
      width: 180,
    },
  }),
  author: {
    display: 'inline-flex',
    color: (theme) => theme.palette.action.main,
    '&:hover': {
      color: (theme) => theme.palette.action.dark,
    },
  },
  row: {
    display: 'flex',
    gap: 5,
  },
};
