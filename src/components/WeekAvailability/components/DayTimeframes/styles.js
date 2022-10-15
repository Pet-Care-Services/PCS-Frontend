import { TILE_HEIGHT } from './consts';

export default (readOnly) => ({
  root: {
    width: '100%',
    flex: 1,
    borderRadius: (theme) => theme.borderRadius.tiny,
    backgroundColor: (theme) => theme.palette.neutral.main,
    position: 'relative',
    backgroundSize: `100% ${TILE_HEIGHT}px`,
    backgroundImage: (theme) =>
      `linear-gradient(to bottom, ${
        theme.palette.secondary.main
      } ${theme.spacing(1)}, transparent ${theme.spacing(1)})`,
  },
  active: {
    backgroundColor: (theme) => theme.palette.primary.main,
  },
  intervalTile: {
    position: 'absolute',
    width: '100%',
    height: TILE_HEIGHT,
    backgroundColor: (theme) => theme.palette.primary.light,
    borderBottom: (theme) =>
      `${theme.spacing(1)} solid ${theme.palette.secondary.main}`,
    ...(!readOnly && {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: (theme) => theme.palette.primary.main,
      },
    }),
  },
  first: {
    borderTopLeftRadius: (theme) => theme.borderRadius.tiny,
    borderTopRightRadius: (theme) => theme.borderRadius.tiny,
  },
  last: {
    borderBottomLeftRadius: (theme) => theme.borderRadius.tiny,
    borderBottomRightRadius: (theme) => theme.borderRadius.tiny,
    borderBottom: 0,
  },
});
