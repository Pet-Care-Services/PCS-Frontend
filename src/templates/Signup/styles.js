import { smBreakpoint, xsBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
  },
  dualField: {
    width: '100%',
    display: 'flex',
    columnGap: 10,
  },
  leftSideFields: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,

    [xsBreakpoint(theme)]: {
      width: '100%',
    },
  }),
  avatarFieldsWrapper: (theme) => ({
    minWidth: 160,
    width: 160,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    alignItems: 'center',

    [xsBreakpoint(theme)]: {
      minWidth: '100%',
      flexDirection: 'row',
      gap: 10,
    },
  }),
  avatar: (theme) => ({
    width: 120,
    height: 120,
    borderRadius: (theme) => theme.borderRadius.infinite,
    border: (theme) =>
      `${theme.spacing(1)} solid ${theme.palette.neutral.main}`,
    objectFit: 'cover',

    [smBreakpoint(theme)]: {
      width: 100,
      height: 100,
    },
  }),
  linkButton: {
    marginBottom: -20,
    alignSelf: 'flex-end',
  },
};
