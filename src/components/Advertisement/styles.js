import { availabilityComponentHeight } from 'components/WeekAvailability/consts';

export default {
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
    gap: 20,
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
    rowGap: 5,
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
    gap: 10,
  },
  fakeAvailabilityArea: {
    height: availabilityComponentHeight,
  },
  textAvailability: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
  },
  description: {
    marginBottom: 10,
  },
  author: {
    display: 'inline-flex',
    color: (theme) => theme.palette.action.main,
    '&:hover': {
      color: (theme) => theme.palette.action.dark,
    },
  },
};
