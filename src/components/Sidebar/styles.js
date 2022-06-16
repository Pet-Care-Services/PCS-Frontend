export default {
  topIconsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: (theme) => theme.palette.white,
    paddingRight: 20,
    margin: (theme) => theme.spacing(20, 0, 50, 20),
  },
  itemsWrapper: {
    width: '90%',
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
  },
  loginButton: {
    margin: 20,
    marginTop: 'auto',

    '&:hover': {
      color: (theme) => theme.palette.black,
      backgroundColor: (theme) => theme.palette.white,
    },
  },
};
