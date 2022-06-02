import * as Yup from 'yup';

const getValidation = (t) =>
  Yup.object().shape({
    activity: Yup.string().required(t('validation.required')),
    price: Yup.object().shape({
      amount: Yup.number().required(t('validation.required')),
      type: Yup.string().required(t('validation.required')),
    }),
    location: Yup.string().required(t('validation.required')),
  });

export default getValidation;
