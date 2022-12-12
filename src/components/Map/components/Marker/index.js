import React, { useEffect, useState } from 'react';
import { Circle, OverlayView } from '@react-google-maps/api';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { Collapse, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import PriceRange from 'components/PriceRange';
import Rating from 'components/Rating';
import TagList from 'components/TagList';
import { markerDataShape } from 'shapes/markerShapes';
import { getCircleOptions } from '../utils';
import styles from './styles';

const Marker = ({
  data,
  position,
  radius,
  reset,
  onMapClick,
  onMarkerClick,
}) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(false);
  }, [reset]);

  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <>
        <Box sx={styles.popupPosition}>
          <Collapse in={isActive}>
            <Box
              sx={styles.popup}
              onClick={() => {
                setIsActive(false);
                onMarkerClick({
                  servicesIndices: data.servicesIndices,
                  requestId: data.requestId,
                });
              }}
            >
              <Box sx={styles.popupRow}>
                <Rating value={data.averageRating} />
                <PriceRange
                  from={data.price.from}
                  to={data.price.to}
                  type={data.price.type}
                  textVariant="h3"
                />
              </Box>
              <TagList
                labels={data.activities}
                modelKey="activity"
                color={theme.palette.neutral.main}
              />
              <TagList
                labels={data.animals}
                modelKey="animal"
                color={theme.palette.secondary.dark}
              />
            </Box>
          </Collapse>
        </Box>
        <Box
          sx={styles.clickableArea}
          onClick={(e) => {
            e.stopPropagation();
            setIsActive((v) => !v);
          }}
        >
          <Box sx={styles.center} />
        </Box>
        <Circle
          onClick={onMapClick}
          center={position}
          radius={radius}
          options={getCircleOptions(
            theme.palette.primary.main,
            theme.palette.primary.dark
          )}
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
  data: markerDataShape,
  reset: PropTypes.bool,
  onMapClick: PropTypes.func,
  onMarkerClick: PropTypes.func,
};

Marker.defaultProps = {
  radius: null,
  onMapClick: noop,
  onMarkerClick: noop,
};

export default Marker;
