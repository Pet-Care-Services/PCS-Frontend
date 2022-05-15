import { isNil, lowerCase } from 'lodash';
import * as Yup from 'yup';

const getFiltersValidation = (t) =>
  Yup.object().shape(
    {
      animal: Yup.string(),
      location: Yup.string(),
      service: Yup.string(),
      priceMin: Yup.number().when('priceMax', {
        is: (val) => !isNil(val),
        then: (schema) =>
          schema.max(
            Yup.ref('priceMax'),
            t('validation.max', { value: lowerCase(t('maximalPrice')) })
          ),
      }),
      priceMax: Yup.number().when('priceMin', {
        is: (val) => !isNil(val),
        then: (schema) =>
          schema.min(
            Yup.ref('priceMin'),
            t('validation.min', { value: lowerCase(t('minimalPrice')) })
          ),
      }),
    },
    [['priceMin', 'priceMax']]
  );

export { getFiltersValidation };
