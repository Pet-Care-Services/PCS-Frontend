import commonStyles from 'consts/commonStyles';

export default {
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
