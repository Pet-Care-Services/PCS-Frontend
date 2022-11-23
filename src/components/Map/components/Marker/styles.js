export default {
  clickableArea: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    transform: 'translate(-50%, -50%)',
    alignItems: 'center',
    cursor: 'pointer',
  },
  center: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: (theme) => theme.palette.error.main,
    border: (theme) => `${theme.spacing(2)} solid ${theme.palette.error.dark}`,
  },
  popupPosition: {
    position: 'absolute',
    transform: 'translate(-50%, calc(-100% - 20px))',
    zIndex: 1,
  },
  popup: {
    minWidth: 250,
    padding: 10,
    backgroundColor: (theme) => theme.palette.white,
    border: (theme) =>
      `${theme.spacing(1)} solid ${theme.palette.neutral.main}`,
    borderRadius: (theme) => theme.borderRadius.tiny,
    transition: (theme) => theme.transition,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,

    '&:hover': {
      backgroundColor: (theme) => theme.palette.secondary.main,
      borderColor: (theme) => theme.palette.neutral.dark,
    },
  },
  popupRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};
