export default {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    columnGap: 20,
  },
  filtersWrapper: {
    position: 'relative',
    width: 380,
    minWidth: 380,
  },
  contentWrapper: {
    flex: 1,
    minWidth: 600,
  },
  flexColumn: {
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
    margin: (theme) => theme.spacing(-10, 0),
  },
  loadMoreLoader: {
    marginTop: 10,
  },
};
