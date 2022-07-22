import React from 'react';
import { Circle, OverlayView } from '@react-google-maps/api';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material';
import { Box } from '@mui/system';
import styles from './styles';

const Marker = ({ position, radius }) => {
  const theme = useTheme();

  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <>
        <Box sx={styles.center} />
        <Circle
          center={position}
          radius={radius}
          options={{
            fillColor: theme.palette.primary.main,
            strokeColor: theme.palette.primary.dark,
            strokeWeight: 1,
            strokeOpacity: 0.5,
          }}
        />
      </>
    </OverlayView>
  );
};

Marker.propTypes = {
  position: PropTypes.exact({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  radius: PropTypes.number,
};

export default Marker;
