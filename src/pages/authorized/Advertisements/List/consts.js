import { FIELD_TYPES } from 'components/Filters/components/Field/consts';

const filtersFields = [
  {
    name: 'animal',
    label: 'Animal',
    fieldType: FIELD_TYPES.INPUT,
  },
  {
    name: 'location',
    label: 'Location',
    fieldType: FIELD_TYPES.INPUT,
  },
  {
    name: 'activity',
    label: 'Service',
    fieldType: FIELD_TYPES.INPUT,
  },
  [
    {
      name: 'priceMin',
      label: 'Minimum Price',
      fieldType: FIELD_TYPES.INPUT,
    },
    {
      name: 'priceMax',
      label: 'Maximum Price',
      fieldType: FIELD_TYPES.INPUT,
    },
  ],
];

export { filtersFields };
