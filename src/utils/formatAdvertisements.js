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

export { formatAnimals, formatPrice };

export default (advertisements, onContactClick) => {
  return map(advertisements, (entry) => ({
    ...entry,
    author: `${entry.firstName} ${entry.lastName}`,
    activities: map(entry.activities, ({ name }) => name),
    animals: formatAnimals(entry.animals || entry.animal),
    price: formatPrice(entry.price),
    location: formatLocationText(entry.location),
    image: entry.imageUrl || entry.avatar,
    weekAvailability:
      entry.weekAvailability && formatWeekAvailability(entry.weekAvailability),
    onContactClick: () =>
      onContactClick({ ...entry, image: entry.imageUrl || entry.avatar }),
  }));
};
