import * as Yup from 'yup';

export default (t) =>
  Yup.object().shape({
    price: Yup.number().required(t('validation.required')),
    message: Yup.string(),
  });
