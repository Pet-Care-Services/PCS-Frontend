import addOpacity from 'utils/addOpacity';

export default {
  root: {
    width: '100%',
    borderRadius: (theme) => theme.borderRadius.small,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    padding: 10,
    backgroundColor: (theme) => theme.palette.secondary.main,
  },
  rejected: {
    backgroundColor: (theme) => theme.palette.neutral.main,
  },
  accepted: {
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.white,
  },
  content: {
    display: 'flex',
    columnGap: 20,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 140,
    height: 100,
    objectFit: 'cover',
    borderRadius: (theme) => theme.borderRadius.small,
  },
  openIcon: {
    position: 'absolute',
    color: (theme) => theme.palette.white,
    left: 5,
    top: 5,
    backgroundColor: (theme) => addOpacity(theme.palette.black, 50),
    '&:hover': {
      backgroundColor: (theme) => addOpacity(theme.palette.black, 70),
    },
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
    rowGap: 15,
  },
  tags: {
    display: 'flex',
    columnGap: 10,
  },
};
