import * as Yup from 'yup';

const getValidation = (t) =>
  Yup.object().shape({
    email: Yup.string()
      .email(t('validation.email'))
      .required(t('validation.required')),
    password: Yup.string().required(t('validation.required')),
  });

export default getValidation;
