import * as Yup from 'yup';

const getValidation = (t) =>
  Yup.object().shape({
    firstName: Yup.string().required(t('validation.required')),
    lastName: Yup.string().required(t('validation.required')),
    email: Yup.string()
      .email(t('validation.email'))
      .required(t('validation.required')),
    password: Yup.string()
      .min(5, t('validation.fieldTooShort', { field: t('password'), value: 5 }))
      .required(t('validation.required')),
    mobile: Yup.string()
      .min(9, t('validation.mobile'))
      .required(t('validation.required')),
    gender: Yup.string().required(t('validation.required')),
    birthdate: Yup.string().required(t('validation.required')),
  });

export default getValidation;
