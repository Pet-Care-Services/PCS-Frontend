import * as Yup from 'yup';

export default (t) =>
  Yup.object().shape({
    price: Yup.number().required(t('validation.required')),
    message: Yup.string(),
    weekAvailability: Yup.object()
      .shape({
        date: Yup.string(),
        timeframes: Yup.array().of(
          Yup.object().shape({
            from: Yup.string(),
            to: Yup.string(),
          })
        ),
      })
      .nullable()
      .required(t('validation.required')),
  });
