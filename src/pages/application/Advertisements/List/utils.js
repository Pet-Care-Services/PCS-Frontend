import { map } from 'lodash';

const formatData = (advertisements) =>
  map(advertisements, (entry) => ({
    id: entry.id,
    activities: map(entry.activities, ({ name }) => name),
    animals: [entry.animal.name],
    starsValue: 5,
    price: {
      from: entry.price.amount,
    },
    location: entry.location,
    image: require('assets/mockPhoto.jpg'),
  }));

export { formatData };
