import { FIELD_TYPES } from 'components/Filters/components/Field/consts';

const getFiltersFields = (t, animalsOptions, activitiesOptions) => [
  {
    name: 'animalId',
    label: t('animal'),
    fieldType: FIELD_TYPES.SELECT,
    fieldProps: {
      options: animalsOptions,
    },
  },
  {
    name: 'activityId',
    label: t('service'),
    fieldType: FIELD_TYPES.SELECT,
    fieldProps: {
      options: activitiesOptions,
    },
  },
  {
    name: 'location',
    label: t('location'),
    fieldType: FIELD_TYPES.INPUT,
  },
  [
    {
      name: 'minPrice',
      label: t('minimalPrice'),
      fieldType: FIELD_TYPES.INPUT,
      fieldProps: {
        onlyNumbers: true,
      },
    },
    {
      name: 'maxPrice',
      label: t('maximalPrice'),
      fieldType: FIELD_TYPES.INPUT,
      fieldProps: {
        onlyNumbers: true,
      },
    },
  ],
];

export { getFiltersFields };
