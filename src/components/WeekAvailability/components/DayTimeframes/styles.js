export default (readOnly) => ({
  availabilityBox: {
    width: '100%',
    flex: 1,
    borderRadius: (theme) => theme.borderRadius.tiny,
    backgroundColor: (theme) => theme.palette.neutral.main,
  },
  active: {
    backgroundColor: (theme) => theme.palette.primary.main,
  },
  intervalTile: {
    width: '100%',
    height: 5,
    borderBottom: (theme) =>
      `${theme.spacing(1)} solid ${theme.palette.secondary.main}`,
    '&:first-of-type': {
      borderTopLeftRadius: (theme) => theme.borderRadius.tiny,
      borderTopRightRadius: (theme) => theme.borderRadius.tiny,
    },
    '&:last-of-type': {
      borderBottomLeftRadius: (theme) => theme.borderRadius.tiny,
      borderBottomRightRadius: (theme) => theme.borderRadius.tiny,
      borderBottom: 0,
    },
  },
  available: {
    backgroundColor: (theme) => theme.palette.primary.light,
    ...(!readOnly && {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: (theme) => theme.palette.primary.main,
      },
    }),
  },
});
