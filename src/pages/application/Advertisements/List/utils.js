import { forEach, isArray, map, split, toString } from 'lodash';
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

const compareArrayWithString = (array, string) => {
  if (!array || !string) {
    return false;
  }
  const arrayToCompare = split(string, ',');

  return (
    array.length === arrayToCompare.length &&
    array.every(
      (value, index) => toString(value) === toString(arrayToCompare[index])
    )
  );
};

const formatData = (advertisements, onContactClick) => {
  return map(advertisements, (entry) => ({
    ...entry,
    activities: map(entry.activities, ({ name }) => name),
    animals: formatAnimals(entry.animals || entry.animal),
    starsValue: 5,
    price: formatPrice(entry.price),
    location: formatLocationText(entry.location),
    image: entry.imageUrl || entry.avatar,
    weekAvailability:
      entry.weekAvailability && formatWeekAvailability(entry.weekAvailability),
    onContactClick: () =>
      onContactClick({ ...entry, image: entry.imageUrl || entry.avatar }),
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

export { formatData, formatMarkers, compareArrayWithString, joinPages };
