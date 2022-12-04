import * as Yup from 'yup';

const getValidation = (t, isService) =>
  Yup.object().shape({
    activities: Yup.array().of(
      Yup.object({
        id: Yup.string().required(t('validation.required')),
      })
    ),
    price: Yup.object().shape({
      amount: Yup.number().required(t('validation.required')),
      type: Yup.string().required(t('validation.required')),
    }),
    location: Yup.object().shape({
      address: Yup.string().required(t('validation.required')),
      flatNumber: Yup.string(),
      city: Yup.string().required(t('validation.required')),
      postalCode: Yup.string().required(t('validation.required')),
    }),
    pin: Yup.object().shape({
      ...(isService && {
        radius: Yup.number().required(t('validation.required')),
      }),
    }),
    availabilities: Yup.array().of(
      Yup.object({
        from: Yup.date().required(t('validation.required')),
        to: Yup.date()
          .required(t('validation.required'))
          .min(Yup.ref('from'), t('validation.endDate')),
        cyclic: Yup.bool().required(t('validation.required')),
        period: Yup.string().required(t('validation.required')),
      })
    ),
    ...(isService && {
      capacity: Yup.number().required(t('validation.required')),
    }),
    ...(!isService && {
      description: Yup.string().required(t('validation.required')),
    }),
  });

export default getValidation;
