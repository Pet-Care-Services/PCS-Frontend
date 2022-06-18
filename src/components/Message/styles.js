export default {
  root: {
    width: 'fit-content',
    backgroundColor: (theme) => theme.palette.neutral.main,
    borderRadius: 20,
    padding: (theme) => theme.spacing(8, 15),
    minHeight: 38,
  },
  text: {
    lineHeight: 1.5,
  },
  myMessage: {
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.white,
  },
};
