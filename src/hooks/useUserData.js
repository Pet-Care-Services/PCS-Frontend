import { useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from 'providers/UserData';
import { actions } from 'providers/UserData/reducer';

const useUserData = () => {
  const context = useContext(UserDataContext);

  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataContext');
  }

  const setToken = (token) => {
    axios.defaults.headers.common = {
      Authorization: token,
    };

    if (localStorage.getItem('token') !== token) {
      localStorage.setItem('token', token);
    }

    context.dispatch({
      type: actions.SET_TOKEN,
      payload: token,
    });
  };

  const setUsername = (username) => {
    context.dispatch({
      type: actions.SET_USERNAME,
      payload: username,
    });
  };

  const clearUserData = () => {
    localStorage.removeItem('token');
    context.dispatch({
      type: actions.CLEAR,
    });
  };

  return {
    username: context.state.username,
    isLoggedIn: context.state.token !== null,
    setToken,
    setUsername,
    clearUserData,
  };
};

export default useUserData;
