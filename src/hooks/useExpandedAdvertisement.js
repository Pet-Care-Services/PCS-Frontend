import { useEffect, useState } from 'react';
import { findIndex, includes, isNil, split, toInteger } from 'lodash';
import { ITEM_TYPE } from 'consts/enums';
import useURLParams from './useURLParams';

const compareArrayWithString = (array, string) => {
  if (!array || !string) {
    return false;
  }
  const arrayToCompare = split(string, ',');

  return (
    array.length === arrayToCompare.length &&
    array.every(
      (value, index) => toString(value) === toString(arrayToCompare[index])
    )
  );
};

const isEmptyValue = (value) => isNil(value) || value === '';

const useExpandedAdvertisement = (advertisements, itemType, isLoading) => {
  const { params, updateParams } = useURLParams();
  const [expandedAdvertisementIndex, setExpandedAdvertisementIndex] =
    useState(null);

  const isService = itemType === ITEM_TYPE.SERVICE;
  const expandedParam = params.expanded;
  const itemTypeParam = params.itemType;

  useEffect(() => {
    if (isEmptyValue(expandedParam)) {
      if (!isNil(expandedAdvertisementIndex)) {
        setExpandedAdvertisementIndex(null);
      }
      return;
    }

    const index = findIndex(
      advertisements,
      ({ servicesIndices, requestId }) => {
        let boolValue = false;
        if (isService) {
          if (includes(expandedParam, ',')) {
            boolValue = compareArrayWithString(servicesIndices, expandedParam);
          } else {
            boolValue = includes(servicesIndices, toInteger(expandedParam));
          }
        } else {
          boolValue = toString(expandedParam) === toString(requestId);
        }

        return boolValue;
      }
    );

    if (index >= 0) {
      setExpandedAdvertisementIndex(index);
    }
  }, [expandedParam, isLoading, isService]);

  const onAdvertisementClick = (index) => {
    if (index === expandedAdvertisementIndex) {
      setExpandedAdvertisementIndex(null);

      const newParams = {};
      if (params.expanded) {
        newParams.expanded = '';
      }
      if (params.itemType) {
        newParams.itemType = '';
      }
      updateParams(newParams);
    } else {
      setExpandedAdvertisementIndex(index);
    }
  };

  return {
    expandedAdvertisementIndex:
      isEmptyValue(itemTypeParam) || itemTypeParam === itemType
        ? expandedAdvertisementIndex
        : null,
    onAdvertisementClick,
  };
};

export default useExpandedAdvertisement;
