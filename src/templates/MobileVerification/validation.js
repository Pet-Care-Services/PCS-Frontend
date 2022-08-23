import * as Yup from 'yup';

const getValidation = (t) =>
  Yup.object().shape({
    code: Yup.string()
      .min(6, t('validation.invalidTextLength'))
      .max(6, t('validation.invalidTextLength'))
      .required(t('validation.required')),
  });

export default getValidation;
