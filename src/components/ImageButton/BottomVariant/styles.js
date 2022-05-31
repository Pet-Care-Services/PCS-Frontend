import addOpacity from 'utils/addOpacity';

const SIZE = 100;

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'fit-content',
  },
  clickable: {
    cursor: 'pointer',
  },
  img: {
    width: SIZE,
    height: SIZE,
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: (theme) =>
      `${theme.spacing(0, 2, 5)} ${addOpacity(theme.palette.black, 50)}`,
  },
  fade: {
    width: SIZE,
    height: SIZE,
    backgroundColor: (theme) => addOpacity(theme.palette.neutral.main, 60),
    position: 'absolute',
    top: 0,
    borderRadius: '50%',
  },
  imgWrapper: {
    position: 'relative',
  },
  textFaded: {
    color: (theme) => addOpacity(theme.palette.black, 60),
  },
};
