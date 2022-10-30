export default {
  root: {
    display: 'flex',
    columnGap: 20,
  },
  sideColumn: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    width: 200,
  },
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
  },
  image: {
    width: '100%',
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
  },
};
