import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Error from 'pages/application/Error';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    if (process.env.REACT_APP_ENV === 'development') {
      console.log(error, errorInfo);
    }
  }
  render() {
    if (this.state.hasError) {
      return <Error code={500} />;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTranslation()(ErrorBoundary);
