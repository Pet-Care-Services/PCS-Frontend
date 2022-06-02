export default {
  root: {
    margin: 40,
    padding: (theme) => theme.spacing(20, 40),
    width: 600,
    minWidth: 300,
    backgroundColor: (theme) => theme.palette.white,
    borderRadius: 10,
  },
  form: {
    rowGap: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  dualField: {
    display: 'flex',
    columnGap: 15,
  },
  field: {
    minWidth: 300,
    maxWidth: 300,
  },
  narrowField: {
    minWidth: 150,
  },
  inputAdornment: {
    marginRight: 20,
  },
  submitButton: {
    width: 300,
    margin: 'auto',
  },
};
