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
  root: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: 30,
    p: 15,
    cursor: 'pointer',

    [mdBreakpoint(theme)]: {
      p: 8,
    },
  }),
  collapsedBox: {
    display: 'flex',
    gap: 20,
  },
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
      height: 80,
    },
  }),
  centerColumnBox: {
    display: 'flex',
    flexGrow: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  rightColumnBox: {
    display: 'flex',
    flexGrow: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  justifyEndBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  expandedBox: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  location: (theme) => ({
    width: 400,

    [lgBreakpoint(theme)]: {
      width: 200,
    },
    [mdBreakpoint(theme)]: {
      width: 170,
    },
  }),
};
