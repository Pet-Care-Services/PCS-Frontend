import commonStyles from 'consts/commonStyles';
import { smBreakpoint, xsBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  content: (theme) => ({
    width: '100%',
    display: 'flex',
    borderRadius: (theme) => theme.borderRadius.small,
    columnGap: 10,
    height: 550,

    [smBreakpoint(theme)]: {
      height: 540,
    },
    [xsBreakpoint(theme)]: {
      height: 525,
    },
  }),
  dayBoxRoot: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 10,
  },
  dayNumber: (theme) => ({
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    borderRadius: (theme) => theme.borderRadius.infinite,
    backgroundColor: (theme) => theme.palette.neutral.main,
    ...commonStyles.centered,

    [smBreakpoint(theme)]: {
      width: 30,
      minWidth: 30,
      height: 30,
      minHeight: 30,
    },
  }),
  active: {
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.white,
  },
  error: {
    color: (theme) => theme.palette.error.main,
  },
};
