import { forEach, map } from 'lodash';
import { formatAnimals, formatPrice } from 'utils/formatAdvertisements';

const formatMarkers = (advertisements) =>
  map(advertisements, (entry) => ({
    position: {
      lat: entry.pin.latitude,
      lng: entry.pin.longitude,
    },
    radius: entry.pin.radius,
    data: {
      servicesIndices: entry.servicesIndices,
      requestId: entry.requestId,
      activities: map(entry.activities, ({ name }) => name),
      animals: formatAnimals(entry.animals || entry.animal),
      starsValue: 5,
      price: formatPrice(entry.price),
    },
  }));

const joinPages = (pages) => {
  const result = [];

  forEach(pages, (page) => {
    result.push(...page.data.content);
  });

  return result;
};

export { formatMarkers, joinPages };
