export default {
  paper: {
    width: 300,
    backgroundColor: (theme) => theme.palette.primary.main,
  },
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
};
