import React from 'react';
import { Circle, OverlayView } from '@react-google-maps/api';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material';
import { Box } from '@mui/system';
import styles from './styles';

const Marker = ({ position, radius, onMapClick, onMarkerClick }) => {
  const theme = useTheme();

  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <>
        <Box
          sx={styles.center}
          onClick={(e) => {
            e.stopPropagation();
            onMarkerClick(position);
          }}
        />
        <Circle
          onClick={onMapClick}
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
  onMapClick: PropTypes.func,
  onMarkerClick: PropTypes.func,
};

Marker.defaultProps = {
  radius: null,
  onMapClick: noop,
  onMarkerClick: noop,
};

export default Marker;
