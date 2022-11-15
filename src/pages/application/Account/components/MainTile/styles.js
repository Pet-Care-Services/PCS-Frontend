export default {
  mainTile: {
    display: 'flex',
    padding: 20,
    gap: 20,
    width: '50%',
  },
  nameAndEditIcon: {
    alignItems: 'center',
  },
  image: {
    borderRadius: (theme) => theme.borderRadius.infinite,
    width: 150,
    height: 150,
    objectFit: 'cover',
  },
  editIcon: {
    marginLeft: 'auto',
  },
};
