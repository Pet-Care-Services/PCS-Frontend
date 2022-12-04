import {
  mdBreakpoint,
  smBreakpoint,
  smMidBreakpoint,
  xsBreakpoint,
} from 'hooks/useBreakpoints';

export default {
  root: (theme) => ({
    margin: 40,
    padding: (theme) => theme.spacing(20, 40),
    width: 850,

    [mdBreakpoint(theme)]: {
      width: 'auto',
    },
    [xsBreakpoint(theme)]: {
      padding: 10,
    },
  }),
  form: {
    rowGap: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 10,
  },
  image: {
    width: 140,
    height: 108,
    borderRadius: (theme) => theme.borderRadius.small,
    border: (theme) =>
      `${theme.spacing(1)} solid ${theme.palette.neutral.main}`,
    objectFit: 'cover',
  },
  multiFieldLine: (theme) => ({
    display: 'flex',
    gap: 15,

    [mdBreakpoint(theme)]: {
      flexWrap: 'wrap',
    },
  }),
  field: {
    minWidth: 300,
    maxWidth: 300,
  },
  fullWidthField: (theme) => ({
    minWidth: 300,
    mwidth: '100%',

    [mdBreakpoint(theme)]: {
      minWidth: 200,
    },
  }),
  narrowField: {
    minWidth: 120,
    maxWidth: 200,
  },
  dateField: (theme) => ({
    minWidth: 250,
    maxWidth: 300,

    [mdBreakpoint(theme)]: {
      minWidth: 200,
      maxWidth: 200,
    },
    [smMidBreakpoint(theme)]: {
      minWidth: 140,
      maxWidth: 140,
    },
    [smBreakpoint(theme)]: {
      minWidth: '100%',
      maxWidth: '100%',
    },
  }),
  inputAdornment: {
    marginRight: 20,
  },
  submitButton: {
    width: 300,
    margin: 'auto',
  },
  selfCentered: {
    alignSelf: 'center',
  },
  deleteIcon: {
    color: (theme) => theme.palette.neutral.dark,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  row: {
    display: 'flex',
    gap: 15,
  },
  noWrap: {
    flexWrap: 'nowrap !important',
  },
  largeGap: (theme) => ({
    gap: 20,

    [mdBreakpoint(theme)]: {
      gap: 40,
    },
  }),
  headerText: {
    color: (theme) => theme.palette.black,
  },
};
