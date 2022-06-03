import * as Yup from 'yup';

const getValidation = (t) =>
  Yup.object().shape({
    activity: Yup.string().required(t('validation.required')),
    price: Yup.object().shape({
      amount: Yup.number().required(t('validation.required')),
      type: Yup.string().required(t('validation.required')),
    }),
    location: Yup.string().required(t('validation.required')),
    availabilities: Yup.array().of(
      Yup.object({
        date: Yup.string().required(t('validation.required')),
        cyclic: Yup.bool().required(t('validation.required')),
        period: Yup.string().required(t('validation.required')),
      })
    ),
  });

export default getValidation;
