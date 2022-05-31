import React from 'react';
import PropTypes from 'prop-types';
import BottomTitleVariant from './BottomVariant';
import InsideTitleVariant from './InsideVariant';
import { defaultPropsObject, propTypesObject } from './shapes';

const ImageButton = ({ variant, ...props }) => {
  switch (variant) {
    case 'inside':
      return <InsideTitleVariant {...props} />;
    case 'bottom':
      return <BottomTitleVariant {...props} />;
  }
};

ImageButton.propTypes = {
  variant: PropTypes.oneOf(['inside', 'bottom']),
  ...propTypesObject,
};

ImageButton.defaultProps = {
  variant: 'inside',
  ...defaultPropsObject,
};

export default ImageButton;
