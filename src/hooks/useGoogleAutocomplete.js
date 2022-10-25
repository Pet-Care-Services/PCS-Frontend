import { useEffect, useRef } from 'react';
import { debounce, noop } from 'lodash';
import { useQuery } from 'react-query';
import {
  AUTOCOMPLETE_MIN_LENGTH_TO_SEARCH,
  DEBOUNCE_TIME,
} from 'consts/config';
import { ENV } from 'consts/enums';
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
        const actionFunction =
          process.env.REACT_APP_ENV === ENV.PRODUCTION ? refetch : noop;
        const debouncedFunction = debounce(actionFunction, DEBOUNCE_TIME);
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
