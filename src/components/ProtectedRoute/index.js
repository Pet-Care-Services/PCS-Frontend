import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { DEFAULT_ROUTE } from 'consts/config';
import useUserData from 'hooks/useUserData';

const ProtectedRoute = ({ unauthorizedRoute, children }) => {
  const { isLoggedIn } = useUserData();

  if (!isLoggedIn) {
    return <Navigate to={unauthorizedRoute} replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  unauthorizedRoute: PropTypes.string,
};

ProtectedRoute.defaultProps = {
  unauthorizedRoute: DEFAULT_ROUTE,
};

export default ProtectedRoute;
