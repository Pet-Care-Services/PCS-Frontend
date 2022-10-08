import { useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { useQuery } from 'react-query';
import {
  AUTOCOMPLETE_MIN_LENGTH_TO_SEARCH,
  DEBOUNCE_TIME,
} from 'consts/config';
import {
  getAddressesFromGoogleAPI,
  GOOGLE_API_AUTOCOMPLETE_KEY,
} from 'consts/queries';

const useGoogleAutocomplete = (id, fieldValue, types) => {
  const debouncedObjectRef = useRef();
  const {
    data,
    isRefetching: isLoading,
    refetch,
  } = useQuery(
    `${GOOGLE_API_AUTOCOMPLETE_KEY}-${id}`,
    () => getAddressesFromGoogleAPI(fieldValue, types),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
    }
  );

  useEffect(() => {
    if (fieldValue) {
      if (fieldValue.length >= AUTOCOMPLETE_MIN_LENGTH_TO_SEARCH) {
        debouncedObjectRef.current?.cancel();
        const debouncedFunction = debounce(refetch, DEBOUNCE_TIME);
        debouncedFunction();
        debouncedObjectRef.current = debouncedFunction;
      }
    }
  }, [fieldValue]);

  return {
    data,
    isLoading,
  };
};

export default useGoogleAutocomplete;
