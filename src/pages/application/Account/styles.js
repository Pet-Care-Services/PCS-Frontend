import commonStyles from 'consts/commonStyles';

export default {
  root: {
    maxWidth: 1000,
    margin: 'auto',
  },
  mainTile: {
    display: 'flex',
    padding: 20,
    gap: 10,
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
  switchButtons: {
    display: 'flex',
    height: 50,
  },
  switchButton: {
    flex: 1,
    transition: (theme) => theme.transition.normal,
    cursor: 'pointer',
    ...commonStyles.centered,

    '&:hover': {
      backgroundColor: (theme) => theme.palette.primary.light,
    },
  },
  leftSwitchButton: {
    borderTopLeftRadius: (theme) => theme.borderRadius.small,
    borderBottomLeftRadius: (theme) => theme.borderRadius.small,
  },
  rightSwitchButton: {
    borderTopRightRadius: (theme) => theme.borderRadius.small,
    borderBottomRightRadius: (theme) => theme.borderRadius.small,
  },
  switchButtonActive: {
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.white,

    '&:hover': {
      backgroundColor: (theme) => theme.palette.primary.main,
    },
  },
};
