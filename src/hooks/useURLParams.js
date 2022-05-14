import { useSearchParams } from 'react-router-dom';

const useURLParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  const updateParams = (newParams) => {
    setSearchParams({ ...params, ...newParams });
  };

  return {
    updateParams,
    params,
  };
};

export default useURLParams;
