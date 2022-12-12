import React from 'react';
import { Box } from '@mui/material';
import mapIconSrc from 'assets/icons/map.png';
import { FIELD_TYPES } from 'components/Filters/components/Field/consts';

const getFiltersFields = (t, animalsOptions, activitiesOptions) => [
  {
    name: 'animalIndices',
    label: t('animalLabel'),
    fieldType: FIELD_TYPES.SELECT,
    fieldProps: {
      options: animalsOptions,
    },
  },
  {
    name: 'activityIndices',
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
  [
    {
      name: 'minCapacity',
      label: t('minimalCapacity'),
      fieldType: FIELD_TYPES.INPUT,
      fieldProps: {
        onlyNumbers: true,
      },
    },
    {
      name: 'maxCapacity',
      label: t('maximalCapacity'),
      fieldType: FIELD_TYPES.INPUT,
      fieldProps: {
        onlyNumbers: true,
      },
    },
  ],
];

const getSortOptions = (t) => [
  {
    value: 'PRICE',
    label: t('price'),
  },
  {
    value: 'RATING',
    label: t('rating'),
  },
  {
    value: 'REVIEWS_AMOUNT',
    label: t('reviewsAmount'),
  },
];

const getOrderOptions = (t) => [
  {
    value: 'false',
    label: t('ascending'),
  },
  {
    value: 'true',
    label: t('descending'),
  },
];

const getOptionsFields = (t, onMapButtonClick, isMapVisible, isSmallScreen) => [
  [
    {
      name: 'sort',
      label: t('sortBy'),
      fieldType: FIELD_TYPES.SELECT,
      fieldProps: {
        options: getSortOptions(t),
      },
    },
    {
      name: 'isDescending',
      label: t('order'),
      fieldType: FIELD_TYPES.SELECT,
      fieldProps: {
        options: getOrderOptions(t),
      },
    },
  ],
  {
    name: 'mapButton',
    fieldType: FIELD_TYPES.BUTTON,
    fieldProps: {
      onClick: onMapButtonClick,
      adornment: (
        <Box
          component="img"
          src={mapIconSrc}
          sx={{ width: 20, height: 20, marginRight: 10 }}
        />
      ),
      sx: {
        alignSelf: 'flex-start',
      },
      children: t(isMapVisible ? 'hideMap' : 'showMap'),
      color: isMapVisible ? 'primary' : 'neutral',
      small: isSmallScreen,
    },
  },
];

const PAGE_SIZE = 6;

export { getFiltersFields, getOptionsFields, PAGE_SIZE };
