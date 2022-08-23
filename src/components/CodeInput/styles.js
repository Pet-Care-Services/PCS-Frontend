export default {
  root: {
    display: 'flex',
    columnGap: 5,
  },
  box: {
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    borderRadius: (theme) => theme.borderRadius.tiny,
    border: (theme) =>
      `${theme.spacing(1)} solid ${theme.palette.neutral.dark}`,
    outline: 'none',
    textAlign: 'center',
    fontSize: 20,

    '&:focus': {
      border: (theme) =>
        `${theme.spacing(2)} solid ${theme.palette.primary.main}`,
    },
  },
  error: {
    color: (theme) => theme.palette.error.main,
  },
};
