import { isNil, lowerCase } from 'lodash';
import * as Yup from 'yup';

const getFiltersValidation = (t) =>
  Yup.object().shape(
    {
      animalIndices: Yup.string(),
      location: Yup.string(),
      activityIndices: Yup.string(),
      minPrice: Yup.number().when('maxPrice', {
        is: (val) => !isNil(val),
        then: (schema) =>
          schema.max(
            Yup.ref('maxPrice'),
            t('validation.max', { value: lowerCase(t('maximalPrice')) })
          ),
      }),
      maxPrice: Yup.number().when('minPrice', {
        is: (val) => !isNil(val),
        then: (schema) =>
          schema.min(
            Yup.ref('minPrice'),
            t('validation.min', { value: lowerCase(t('minimalPrice')) })
          ),
      }),
      minCapacity: Yup.number().when('maxCapacity', {
        is: (val) => !isNil(val),
        then: (schema) =>
          schema.max(
            Yup.ref('maxCapacity'),
            t('validation.max', { value: lowerCase(t('maximalCapacity')) })
          ),
      }),
      maxCapacity: Yup.number().when('minCapacity', {
        is: (val) => !isNil(val),
        then: (schema) =>
          schema.min(
            Yup.ref('minCapacity'),
            t('validation.min', { value: lowerCase(t('minimalCapacity')) })
          ),
      }),
    },
    [
      ['minPrice', 'maxPrice'],
      ['minCapacity', 'maxCapacity'],
    ]
  );

export { getFiltersValidation };
