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
  leftSideFields: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
  },
  rightSideFields: {
    width: 160,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: (theme) => theme.borderRadius.infinite,
    border: (theme) =>
      `${theme.spacing(1)} solid ${theme.palette.neutral.main}`,
    objectFit: 'cover',
  },
  linkButton: {
    marginBottom: -20,
    alignSelf: 'flex-end',
  },
};
