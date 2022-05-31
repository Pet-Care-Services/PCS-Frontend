import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import initialState from './initialState';
import reducer from './reducer';

const AdvertisementCreatorContext = React.createContext({});

const AdvertisementCreatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <AdvertisementCreatorContext.Provider value={value}>
      {children}
    </AdvertisementCreatorContext.Provider>
  );
};

AdvertisementCreatorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdvertisementCreatorProvider;

export { AdvertisementCreatorContext };
