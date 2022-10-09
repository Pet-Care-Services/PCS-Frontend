export default {
  root: {
    margin: 40,
    padding: (theme) => theme.spacing(20, 40),
    width: 850,
    minWidth: 300,
  },
  form: {
    rowGap: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  multiFieldLine: {
    display: 'flex',
    columnGap: 15,
  },
  field: {
    minWidth: 300,
    maxWidth: 300,
  },
  fullWidthField: {
    minWidth: 300,
    mwidth: '100%',
  },
  narrowField: {
    minWidth: 120,
    maxWidth: 200,
  },
  dateField: {
    minWidth: 250,
    maxWidth: 300,
  },
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
};
