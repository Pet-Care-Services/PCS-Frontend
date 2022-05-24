export default {
  paper: {
    width: 300,
    backgroundColor: (theme) => theme.palette.primary.main,
  },
  arrowWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: (theme) => theme.palette.white,
    paddingRight: 10,
    margin: (theme) => theme.spacing(20, 0, 50, 10),
  },
  itemsWrapper: {
    width: '90%',
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
  },
};
