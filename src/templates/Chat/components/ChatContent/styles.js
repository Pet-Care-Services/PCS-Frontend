export default {
  root: {
    width: '100%',
    flex: 1,
    backgroundColor: (theme) => theme.palette.white,
    padding: 15,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    borderTopLeftRadius: 10,
    rowGap: 10,
    overflowY: 'auto',
  },
  messageWrapper: {
    width: '70%',
    display: 'flex',
  },
  myMessage: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
};
