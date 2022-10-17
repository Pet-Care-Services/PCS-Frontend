export default {
  root: {
    width: '100%',
    borderRadius: (theme) => theme.borderRadius.small,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    padding: 10,
    backgroundColor: (theme) => theme.palette.neutral.main,
  },
  pending: {
    backgroundColor: (theme) => theme.palette.secondary.main,
  },
  content: {
    display: 'flex',
    columnGap: 20,
  },
  image: {
    width: 140,
    height: 100,
    objectFit: 'cover',
    borderRadius: (theme) => theme.borderRadius.small,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    columnGap: 10,
  },
  details: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 6,
  },
};
