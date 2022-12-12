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
  activeIndicator: {
    width: '100%',
    minWidth: 20,
    height: 2,
    minHeight: 2,
    backgroundColor: (theme) => theme.palette.white,
    borderRadius: (theme) => theme.borderRadius.infinite,
    position: 'absolute',
    bottom: -13,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  linkWrapper: {
    position: 'relative',
  },
  logo: {
    cursor: 'pointer',
    display: 'flex',
    gap: 20,
  },
};
