import { mdBreakpoint, smBreakpoint } from 'hooks/useBreakpoints';

export default {
  root: (theme) => ({
    display: 'flex',
    padding: 20,
    gap: 20,
    width: '50%',
    color: (theme) => theme.palette.black,

    [mdBreakpoint(theme)]: {
      width: '100%',
    },
    [smBreakpoint(theme)]: {
      flexDirection: 'column',
    },
  }),
  nameAndEditIcon: {
    alignItems: 'center',
  },
  image: (theme) => ({
    borderRadius: (theme) => theme.borderRadius.infinite,
    width: 150,
    height: 150,
    objectFit: 'cover',

    [smBreakpoint(theme)]: {
      width: 70,
      height: 70,
    },
  }),
  editIcon: {
    marginLeft: 'auto',
  },
  propertyName: {
    fontWeight: 500,
    display: 'inline-flex',
    marginRight: 10,
  },
  propertyValue: {
    fontWeight: 300,
    display: 'inline-flex',
  },
};
