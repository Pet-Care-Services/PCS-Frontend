import { isNil, lowerCase } from 'lodash';
import * as Yup from 'yup';

const getFiltersValidation = (t) =>
  Yup.object().shape(
    {
      animalId: Yup.string(),
      location: Yup.string(),
      activityId: Yup.string(),
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
    },
    [['minPrice', 'maxPrice']]
  );

export { getFiltersValidation };
