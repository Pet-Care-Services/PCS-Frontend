import React, { useEffect, useState } from 'react';
import { Circle, OverlayView } from '@react-google-maps/api';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Box, useTheme } from '@mui/material';
import { getCircleOptions } from '../utils';

const ANIM_MAX_DIFF = 50;
const ANIM_STEP = 10;
const ANIM_INTERVAL = 100;

const UserLocationPoint = ({ position, accuracy, onMapClick }) => {
  const theme = useTheme();
  const [radius, setRadius] = useState(accuracy);
  const [animationDirection, setAnimationDirection] = useState(1);

  // Pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRadius((r) => {
        if (r > accuracy + ANIM_MAX_DIFF) {
          setAnimationDirection(-1);
        } else if (r < accuracy - ANIM_MAX_DIFF) {
          setAnimationDirection(1);
        }
        return r + animationDirection * ANIM_STEP;
      });
    }, ANIM_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [animationDirection]);

  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <>
        <Circle
          onClick={onMapClick}
          center={position}
          radius={radius}
          options={getCircleOptions(
            theme.palette.action.main,
            theme.palette.action.dark
          )}
        />
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: (theme) => theme.palette.action.light,
            border: (theme) =>
              `${theme.spacing(2)} solid ${theme.palette.action.dark}`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </>
    </OverlayView>
  );
};

UserLocationPoint.propTypes = {
  position: PropTypes.exact({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  onMapClick: PropTypes.func,
  accuracy: PropTypes.number,
};

UserLocationPoint.defaultProps = {
  onMapClick: noop,
  accuracy: 0,
};

export default UserLocationPoint;
