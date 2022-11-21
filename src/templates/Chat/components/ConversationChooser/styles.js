import { mdBreakpoint, smBreakpoint } from 'hooks/useBreakpoints';
import addOpacity from 'utils/addOpacity';

export default {
  root: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    width: 110,
    height: '100%',
    rowGap: 10,
    backgroundColor: (theme) => theme.palette.primary.main,
    padding: 15,
    paddingRight: 0,
    paddingTop: 55,
    boxSizing: 'border-box',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,

    [mdBreakpoint(theme)]: {
      borderRadius: 0,
    },
    [smBreakpoint(theme)]: {
      width: 64,
    },
  }),
  image: (theme) => ({
    width: 70,
    height: 70,
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',

    [smBreakpoint(theme)]: {
      width: 40,
      height: 40,
    },
  }),
  imageWrapper: (theme) => ({
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

    [smBreakpoint(theme)]: {
      marginLeft: -10,
      height: 50,
    },
  }),
  active: {
    backgroundColor: (theme) => theme.palette.white,
    boxShadow: (theme) =>
      `${theme.spacing(0, 4, 5)} ${addOpacity(theme.palette.black, 50)}`,
  },
};
