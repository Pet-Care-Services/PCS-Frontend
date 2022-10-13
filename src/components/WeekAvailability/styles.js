import commonStyles from 'consts/commonStyles';

export default {
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
  active: {
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.white,
  },
  error: {
    color: (theme) => theme.palette.error.main,
  },
};
