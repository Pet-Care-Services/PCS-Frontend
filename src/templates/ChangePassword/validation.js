import * as Yup from 'yup';

const getValidation = (t) =>
  Yup.object().shape({
    password: Yup.string()
      .min(5, t('validation.fieldTooShort', { field: t('password'), value: 5 }))
      .required(t('validation.required')),
  });

export default getValidation;
