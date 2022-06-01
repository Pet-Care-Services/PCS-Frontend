import addOpacity from 'utils/addOpacity';

const SIZE = 300;
const BOTTOM_BAR_SIZE = 80;

export default {
  root: {
    position: 'relative',
    width: SIZE,
    height: SIZE,
    borderRadius: '50%',
  },
  clickable: {
    cursor: 'pointer',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    position: 'absolute',
    border: (theme) =>
      `${theme.spacing(3)} solid ${theme.palette.primary.main}`,
  },
  bottomBar: {
    width: '100%',
    height: '100%',
    backgroundColor: (theme) => addOpacity(theme.palette.primary.main, 75),
    position: 'absolute',
    bottom: -SIZE / 2 - BOTTOM_BAR_SIZE,
    clipPath: `ellipse(50% 50% at 50% ${-BOTTOM_BAR_SIZE}px)`,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    color: (theme) => theme.palette.white,
    marginTop: 20,
  },
  fadeBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: (theme) => addOpacity(theme.palette.neutral.main, 60),
    position: 'absolute',
    borderRadius: '50%',
    transition: (theme) => theme.transition,
    opacity: 0,
  },
  faded: {
    opacity: 1,
  },
};
