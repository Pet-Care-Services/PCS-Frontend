const RADIUS = 15;

export default {
  root: {
    padding: 0,
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
  },
  toolbar: {
    '&.MuiToolbar-gutters': {
      height: 50,
      minHeight: 50,
      padding: (theme) => theme.spacing(5, 15),
    },
    justifyContent: 'space-between',
  },
  icons: {
    display: 'flex',
    gap: 10,
  },
  rightIcons: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  middleArea: {
    display: 'flex',
    justifyContent: 'center',
    gap: 40,
    height: '100%',
    alignItems: 'center',
  },
  link: {
    cursor: 'pointer',
    opacity: 0.8,
    transition: (theme) => theme.transition.fast,

    '&:hover': {
      opacity: 1,
    },
  },
  activeLink: {
    fontWeight: '600',
    opacity: 1,
  },
  indicator: {
    width: 0,
    height: 2,
    minHeight: 2,
    backgroundColor: (theme) => theme.palette.forceWhite,
    borderRadius: (theme) => theme.borderRadius.infinite,
    position: 'absolute',
    bottom: -5,
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: 0,
    transition: (theme) => theme.transition.fast,
  },
  activeIndicator: {
    opacity: 1,
    width: '100%',
  },
  linkWrapper: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    '&:hover .indicator': {
      opacity: 1,
      width: '100%',
    },
  },
  logo: {
    cursor: 'pointer',
    display: 'flex',
    gap: 20,
  },
  logoShift: {
    marginRight: 40,
  },
};
