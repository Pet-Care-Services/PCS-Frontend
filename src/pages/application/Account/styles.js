import commonStyles from 'consts/commonStyles';

export default {
  root: {
    maxWidth: 1200,
    margin: 'auto',
  },
  mainTile: {
    display: 'flex',
    padding: 20,
    gap: 20,
    width: '50%',
  },
  column: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
  },
  row: {
    width: '100%',
    display: 'flex',
    gap: 10,
  },
  nameAndEditIcon: {
    alignItems: 'center',
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
  comments: {
    alignItems: 'center',
    width: '50%',
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
  editIcon: {
    marginLeft: 'auto',
  },
  form: {
    width: '100%',
    height: '100%',
  },
  formButtons: {
    justifyContent: 'center',
    marginTop: 20,
  },
};
