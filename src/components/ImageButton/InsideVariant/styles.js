import { mdBreakpoint } from 'hooks/useBreakpoints';
import addOpacity from 'utils/addOpacity';

const SIZE = 300;
const SMALL_SIZE = 200;
const BOTTOM_BAR_SIZE = 80;
const SMALL_BOTTOM_BAR_SIZE = 40;

export default {
  root: (theme) => ({
    position: 'relative',
    width: SIZE,
    height: SIZE,
    borderRadius: '50%',

    [mdBreakpoint(theme)]: {
      width: SMALL_SIZE,
      height: SMALL_SIZE,
    },
  }),
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
  bottomBar: (theme) => ({
    width: '100%',
    height: '100%',
    backgroundColor: (theme) => addOpacity(theme.palette.primary.main, 75),
    position: 'absolute',
    bottom: -SIZE / 2 - BOTTOM_BAR_SIZE,
    clipPath: `ellipse(50% 50% at 50% ${-BOTTOM_BAR_SIZE}px)`,
    display: 'flex',
    justifyContent: 'center',

    [mdBreakpoint(theme)]: {
      bottom: -SMALL_SIZE / 2 - SMALL_BOTTOM_BAR_SIZE,
      clipPath: `ellipse(50% 50% at 50% ${-SMALL_BOTTOM_BAR_SIZE}px)`,
    },
  }),
  title: (theme) => ({
    color: (theme) => theme.palette.white,
    marginTop: 20,
    height: 'fit-content',

    [mdBreakpoint(theme)]: {
      marginTop: 10,
    },
  }),
  fadeBlock: {
    width: '100%',
    height: '100%',
    backgroundColor: (theme) => addOpacity(theme.palette.neutral.main, 60),
    position: 'absolute',
    borderRadius: '50%',
    transition: (theme) => theme.transition.normal,
    opacity: 0,
  },
  faded: {
    opacity: 1,
  },
};
