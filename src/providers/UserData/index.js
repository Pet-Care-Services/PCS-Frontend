import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { isNil } from 'lodash';
import PropTypes from 'prop-types';
import reducer from './reducer';

const initialState = {
  username: null,
  token: localStorage.getItem('token'),
};

const UserDataContext = React.createContext({});

const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  useEffect(() => {
    if (!isNil(initialState.token)) {
      axios.defaults.headers.common = {
        Authorization: initialState.token,
      };
    }
  }, []);

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

UserDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserDataProvider;

export { UserDataContext };
