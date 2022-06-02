import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

const IconCheck = ({ Component, active, onClick }) => {
  return <Icon Component={Component} active={active} onClick={onClick} />;
};

IconCheck.propTypes = {
  Component: PropTypes.elementType.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconCheck;
