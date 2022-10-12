import commonStyles from 'consts/commonStyles';

export default (readOnly) => ({
  root: {
    width: '100%',
    display: 'flex',
    padding: 10,
    borderRadius: (theme) => theme.borderRadius.small,
    columnGap: 10,
  },
  dayBoxRoot: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 10,
  },
  dayNumber: {
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    borderRadius: (theme) => theme.borderRadius.infinite,
    backgroundColor: (theme) => theme.palette.neutral.main,
    ...commonStyles.centered,
  },
  availabilityBox: {
    width: '100%',
    flex: 1,
    borderRadius: (theme) => theme.borderRadius.tiny,
    backgroundColor: (theme) => theme.palette.neutral.main,
  },
  active: {
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.white,
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
