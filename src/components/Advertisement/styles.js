export default {
  activitiesTags: {
    backgroundColor: (theme) => theme.palette.secondary.dark,
  },
  animalsTags: {
    backgroundColor: (theme) => theme.palette.neutral.main,
  },
  elevation: {
    borderRadius: 25,
  },
  contactButton: {
    width: 300,
    marginTop: 10,
  },
  collapse: {
    borderRadius: 25,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: 30,
    p: 15,
    cursor: 'pointer',
  },
  collapsedBox: {
    display: 'flex',
    gap: 20,
  },
  imageBox: {
    height: 140,
    width: 180,
    objectFit: 'cover',
    borderRadius: 25,
  },
  centerColumnBox: {
    display: 'flex',
    flexGrow: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  tagsBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  locationBox: {
    display: 'flex',
    alignItems: 'center',
  },
  rightColumnBox: {
    display: 'flex',
    flexGrow: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  justifyEndBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  expandedBox: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  availabilityBox: {
    height: 200,
    border: 1,
  },
};
