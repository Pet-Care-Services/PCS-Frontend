export default (isDarkTheme) => ({
  root: {
    width: 'fit-content',
    backgroundColor: (theme) => theme.palette.neutral.main,
    borderRadius: (theme) => theme.borderRadius.small,
    padding: (theme) => theme.spacing(8, 15),
    minHeight: 38,
    color: (theme) => theme.palette.black,
  },
  text: {
    lineHeight: 1.5,
  },
  myMessage: {
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => (isDarkTheme ? theme.palette.black : theme.palette.white),
  },
});
