export default {
  root: {
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: (theme) => theme.palette.secondary.main,
    padding: (theme) => theme.spacing(0, 5),
    borderBottomLeftRadius: 10,
  },
  input: {
    margin: (theme) => theme.spacing(0, 5),
  },
};
