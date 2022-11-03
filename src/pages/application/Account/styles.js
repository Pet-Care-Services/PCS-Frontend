export default {
  root: {
    display: 'flex',
    columnGap: 20,
    padding: '0 10%',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
  },
  leftColumn: {
    width: 300,
    alignItems: 'center',
  },
  image: {
    borderRadius: (theme) => theme.borderRadius.infinite,
    width: 150,
    height: 150,
    objectFit: 'cover',
  },
  inline: {
    display: 'flex',
    columnGap: 10,
  },
  check: {
    color: (theme) => theme.palette.primary.main,
  },
  error: {
    color: (theme) => theme.palette.error.main,
  },
};
