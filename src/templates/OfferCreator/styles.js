import { mdBreakpoint, xsBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: (theme) => ({
    display: 'flex',
    gap: 20,

    [mdBreakpoint(theme)]: {
      flexDirection: 'column',
    },
  }),
  sideColumn: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    minWidth: 200,
    width: 200,

    [mdBreakpoint(theme)]: {
      flexDirection: 'row',
      width: '100%',
    },
  }),
  form: {
    flex: 1,
  },
  fieldsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    rowGap: 10,
  },
  image: {
    width: '100%',
    maxWidth: 200,
    minWidth: 140,
    height: 140,
    objectFit: 'cover',
    borderRadius: (theme) => theme.borderRadius.tiny,
  },
  rowFields: {
    display: 'flex',
    columnGap: 10,
    alignItems: 'center',
  },
  inputAdornment: {
    marginRight: 10,
  },
  submit: {
    alignSelf: 'center',
    marginTop: 'auto',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 10,
  },
  availabilityWrapper: (theme) => ({
    [xsBreakpoint(theme)]: {
      marginX: -20,
    },
  }),
  text: {
    color: (theme) => theme.palette.black,
  },
};
