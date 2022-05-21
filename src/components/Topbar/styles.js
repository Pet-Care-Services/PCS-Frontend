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
      padding: (theme) => theme.spacing(5, 20),
    },
  },
};
