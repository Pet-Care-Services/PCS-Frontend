export default {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    columnGap: 20,
  },
  contentWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
  },
  centered: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  mapWrapper: {
    width: '100%',
    height: 400,
    margin: (theme) => theme.spacing(15, 0),
  },
  map: {
    borderRadius: 10,
  },
  mapCollapse: {
    margin: (theme) => theme.spacing(-15, 0),
  },
};
