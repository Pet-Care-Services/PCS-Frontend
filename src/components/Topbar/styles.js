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
      padding: (theme) => theme.spacing(5, 10),
    },
    justifyContent: 'space-between',
  },
  icons: {
    width: 200,
  },
  rightIcons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  searchWrapper: {
    flex: 1,
    height: '100%',
    minWidth: 300,
    maxWidth: 800,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
