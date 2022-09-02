import { useState } from 'react';

const useRefresh = () => {
  const [, setState] = useState({});

  const forceRefresh = () => {
    setState({});
  };

  return {
    forceRefresh,
  };
};

export default useRefresh;
