export default (color) => ({
  root: {
    minWidth: 120,
    height: 40,
    borderRadius: (theme) => theme.borderRadius.infinite,
    color: (theme) => theme.palette[color].contrastText,
    textTransform: 'none',
    backgroundColor: (theme) => theme.palette[color].main,
    '&:hover': {
      backgroundColor: (theme) => theme.palette[color].dark,
    },
  },
  small: {
    height: 30,
    width: 'fit-content',
  },
  font: {
    fontWeight: 400,
  },
});
