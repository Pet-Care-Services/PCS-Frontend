import * as Yup from 'yup';

const getValidation = (t) =>
  Yup.object().shape({
    message: Yup.string().required(t('validation.required')),
  });

export default getValidation;
