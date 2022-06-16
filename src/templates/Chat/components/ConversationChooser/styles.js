import addOpacity from 'utils/addOpacity';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 110,
    height: '100%',
    rowGap: 10,
    backgroundColor: (theme) => theme.palette.primary.main,
    padding: 15,
    paddingRight: 0,
    boxSizing: 'border-box',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
  },
  imageWrapper: {
    height: 80,
    width: 'calc(100% + 5)',
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    boxSizing: 'border-box',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    marginLeft: -5,
    marginTop: -5,
    backgroundColor: 'transparent',
  },
  active: {
    backgroundColor: (theme) => theme.palette.white,
    boxShadow: (theme) =>
      `${theme.spacing(0, 4, 5)} ${addOpacity(theme.palette.black, 50)}`,
  },
};
