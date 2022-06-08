import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const useURLParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const updateParams = (newParams) => {
    setSearchParams({ ...params, ...newParams });
  };

  const clearParams = () => {
    setSearchParams({});
  };

  return {
    updateParams,
    clearParams,
    params,
  };
};

export default useURLParams;
