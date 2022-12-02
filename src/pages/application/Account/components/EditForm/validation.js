import { add } from 'date-fns';
import * as Yup from 'yup';
const todayMinus18Years = add(new Date(), { years: -18 });

const getValidation = (t) =>
  Yup.object().shape({
    firstName: Yup.string().required(t('validation.required')),
    lastName: Yup.string().required(t('validation.required')),
    email: Yup.string()
      .email(t('validation.email'))
      .required(t('validation.required')),
    mobile: Yup.string()
      .min(9, t('validation.mobile'))
      .required(t('validation.required')),
    gender: Yup.string().required(t('validation.required')),
    birthdate: Yup.date()
      .required(t('validation.required'))
      .max(todayMinus18Years, t('validation.adult')),
  });

export default getValidation;
