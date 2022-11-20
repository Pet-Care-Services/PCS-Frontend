import * as Yup from 'yup';

const getValidation = (t) =>
  Yup.object().shape({
    stars: Yup.number().nullable().required(t('validation.required')),
    content: Yup.string().required(t('validation.required')),
  });

export default getValidation;
