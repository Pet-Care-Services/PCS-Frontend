import { isArray, map } from 'lodash';
import formatLocation from 'utils/formatLocation';
import formatWeekAvailability from 'utils/formatWeekAvailability';

const formatPrice = (data) => {
  let priceObject;
  if (isArray(data)) {
    priceObject = data[0];
  } else {
    priceObject = data;
  }

  return {
    from: priceObject.from || priceObject.amount,
    to: priceObject.to,
    priceType: priceObject.type,
  };
};

const formatAnimals = (data) => {
  if (isArray(data)) {
    return map(data, ({ name }) => name);
  }

  return [data.name];
};

const formatLocationText = (locationData) => {
  if (isArray(locationData)) {
    return `${formatLocation(locationData[0])}${
      locationData.length > 1 ? ' (...)' : ''
    }`;
  } else {
    return formatLocation(locationData);
  }
};

const formatData = (advertisements, onContactClick) => {
  const mockImage = require('assets/mockPhoto.jpg');

  return map(advertisements, (entry) => ({
    ...entry,
    id: entry.id,
    activities: map(entry.activities, ({ name }) => name),
    animals: formatAnimals(entry.animals || entry.animal),
    starsValue: 5,
    price: formatPrice(entry.price),
    location: formatLocationText(entry.location),
    image: mockImage,
    weekAvailability:
      entry.weekAvailability && formatWeekAvailability(entry.weekAvailability),
    onContactClick: () => onContactClick({ ...entry, image: mockImage }),
  }));
};

const formatMarkers = (advertisements) =>
  map(advertisements, (entry) => ({
    position: {
      lat: entry.pin.latitude,
      lng: entry.pin.longitude,
    },
    radius: entry.pin.radius,
    data: {
      servicesIndices: entry.servicesIndices,
      requestId: entry.id,
      activities: map(entry.activities, ({ name }) => name),
      animals: formatAnimals(entry.animals || entry.animal),
      starsValue: 5,
      price: formatPrice(entry.price),
    },
  }));

export { formatData, formatMarkers };
