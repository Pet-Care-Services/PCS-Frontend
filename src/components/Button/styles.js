export default (color) => ({
  root: {
    minWidth: 120,
    height: 40,
    borderRadius: 50,
    color: (theme) => theme.palette[color].contrastText,
    textTransform: 'none',
    backgroundColor: (theme) => theme.palette[color].main,
    '&:hover': {
      backgroundColor: (theme) => theme.palette[color].dark,
    },
  },
});
