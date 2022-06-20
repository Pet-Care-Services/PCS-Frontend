import { isArray, map } from 'lodash';

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

const formatData = (advertisements) =>
  map(advertisements, (entry) => ({
    id: entry.id,
    activities: map(entry.activities, ({ name }) => name),
    animals: formatAnimals(entry.animals || entry.animal),
    starsValue: 5,
    price: formatPrice(entry.price),
    location: entry.location,
    image: require('assets/mockPhoto.jpg'),
    description: entry.description,
  }));

export { formatData };
