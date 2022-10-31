import { map } from 'lodash';
import mapDictionaryToOptions from 'utils/mapDictionaryToOptions';

const formatAnimalOptions = (animals, t) => {
  const options = mapDictionaryToOptions(animals, 'animal', t);
  return map(options, (option) => ({
    ...option,
    set: [{ field: 'activityId', value: '' }],
  }));
};

export { formatAnimalOptions };
