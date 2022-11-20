import { GENDER } from './enums';

export default (t) => [
  {
    value: GENDER.MALE,
    label: t('gender.MALE'),
  },
  {
    value: GENDER.FEMALE,
    label: t('gender.FEMALE'),
  },
  {
    value: GENDER.RATHER_NOT_SAY,
    label: t('gender.RATHER_NOT_SAY'),
  },
];
