import { isArray, map, mapValues, split } from 'lodash';
import formatLocation from 'utils/formatLocation';

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

const API_DATERANGE_SEPARATOR = '/';

const formatWeekAvailability = ({ dateRange, ...weekdaysData }) => ({
  dateFrom: new Date(split(dateRange, API_DATERANGE_SEPARATOR)[0]),
  daysAvailabilities: {
    ...mapValues(weekdaysData, (dateRangeStringList) => {
      return map(dateRangeStringList, (dateRangeString) => {
        const [from, to] = split(dateRangeString, API_DATERANGE_SEPARATOR);
        return { from: new Date(from), to: new Date(to) };
      });
    }),
  },
});

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

export { formatData };
