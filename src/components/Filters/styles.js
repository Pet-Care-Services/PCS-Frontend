export default {
  root: {
    minWidth: 380,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: (theme) => theme.palette.white,
    padding: 20,
    boxSizing: 'border-box',
    borderRadius: 10,
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 15,
  },
  horizontalFieldsWrapper: {
    display: 'flex',
    columnGap: 10,
  },
  submitButton: {
    marginTop: 10,
  },
};
