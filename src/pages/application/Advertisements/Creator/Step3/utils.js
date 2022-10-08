import { filter, findIndex, get, map } from 'lodash';

const removeDuplicatesByValue = (array) =>
  filter(
    array,
    (entry, index, self) =>
      findIndex(self, (el) => el.value === entry.value) === index
  );

const mapAddressOptions = (googleData) => {
  const predictions = get(googleData, 'predictions', []);

  // Filter to have only data with Street, City, Country
  const filteredPredictions = filter(
    predictions,
    (prediction) => prediction.terms.length >= 3
  );

  const mappedOptions = map(filteredPredictions, (prediction) => ({
    value: prediction.terms[0].value,
    label: prediction.terms[0].value,
    set: [
      {
        field: 'location.city',
        value: prediction.terms[1].value,
      },
    ],
  }));

  return removeDuplicatesByValue(mappedOptions);
};

const mapCityOptions = (googleData) => {
  const predictions = get(googleData, 'predictions', []);

  const mappedOptions = map(predictions, (prediction) => ({
    value: prediction.terms[0].value,
    label: prediction.terms[0].value,
  }));

  return removeDuplicatesByValue(mappedOptions);
};

export { mapAddressOptions, mapCityOptions };
