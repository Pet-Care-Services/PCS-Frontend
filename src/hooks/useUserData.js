import { useContext } from 'react';
import axios from 'axios';
import { isNil } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getMe, ME_QUERY_KEY } from 'consts/queries';
import { UserDataContext } from 'providers/UserData';
import { actions } from 'providers/UserData/reducer';
import useSnackbar from './useSnackbar';

const LONG_REFETCH_INTERVAL = 60000;
const SHORT_REFETCH_INTERVAL = 3000;

const useUserData = () => {
  const context = useContext(UserDataContext);
  const { openSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataContext');
  }

  const isLoggedIn =
    !isNil(context.state.token) &&
    !isNil(axios.defaults.headers.common.Authorization);

  const isFullyVerified =
    context.state.emailVerified && context.state.smsVerified;

  const setUserData = (dataPayload) => {
    context.dispatch({
      type: actions.SET_USER_DATA,
      payload: dataPayload,
    });
  };

  useQuery(ME_QUERY_KEY, getMe, {
    refetchInterval: isFullyVerified
      ? LONG_REFETCH_INTERVAL
      : SHORT_REFETCH_INTERVAL,
    enabled: isLoggedIn,
    onSuccess: (res) => {
      setUserData(res.data);
    },
    onError: () => {
      clearUserData();
      openSnackbar(t('error.sessionExpired'));
      navigate('/application');
    },
  });

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

  const clearUserData = () => {
    localStorage.removeItem('token');
    context.dispatch({
      type: actions.CLEAR,
    });
  };

  return {
    ...context.state,
    isLoggedIn,
    setToken,
    setUserData,
    clearUserData,
  };
};

export default useUserData;
