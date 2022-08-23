export default {
  root: {
    minWidth: 380,
    width: 380,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: (theme) => theme.palette.white,
    padding: 20,
    boxSizing: 'border-box',
    borderRadius: (theme) => theme.borderRadius.small,
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
  buttons: {
    marginTop: 10,
    display: 'flex',
    columnGap: 10,
  },
};
