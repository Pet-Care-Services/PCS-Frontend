import { availabilityComponentHeight } from 'components/WeekAvailability/consts';

export default {
  activitiesTags: {
    backgroundColor: (theme) => theme.palette.secondary.dark,
  },
  animalsTags: {
    backgroundColor: (theme) => theme.palette.neutral.main,
  },
  contactButton: {
    width: 300,
    marginTop: 10,
  },
  collapse: {
    borderRadius: (theme) => theme.borderRadius.small,
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
    borderRadius: (theme) => theme.borderRadius.small,
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
  fakeAvailabilityArea: {
    height: availabilityComponentHeight,
  },
};
