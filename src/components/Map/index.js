import React, { memo, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { isFunction, map, noop, omit } from 'lodash';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import useUserLocation from 'hooks/useUserLocation';
import { markersShape } from 'shapes/markerShapes';
import Marker from './components/Marker';
import UserLocationPoint from './components/UserLocationPoint';
import { anchorPoint, zoom } from './consts';

const Map = ({ markers, onMarkerClick, onClick, sx }) => {
  const [reset, setReset] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const userPositionData = useUserLocation();

  if (!isLoaded) {
    return <Loader />;
  }

  const onMapClick = ({ latLng }) => {
    const lat = latLng.lat();
    const lng = latLng.lng();

    if (isFunction(onClick)) {
      onClick({ lat, lng });
    }
  };

  const userPositionCoords = userPositionData
    ? omit(userPositionData, 'accuracy')
    : null;

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '100%',
        ...sx,
      }}
      center={userPositionCoords || anchorPoint}
      zoom={zoom}
      clickableIcons={false}
      onClick={onMapClick}
    >
      {userPositionData && (
        <UserLocationPoint
          position={userPositionCoords}
          accuracy={userPositionData.accuracy}
          onMapClick={onMapClick}
        />
      )}
      {map(markers, (marker, index) => (
        <Marker
          key={index}
          reset={reset}
          onMapClick={onMapClick}
          onMarkerClick={(...args) => {
            setReset((v) => !v);
            onMarkerClick(...args);
          }}
          {...marker}
        />
      ))}
    </GoogleMap>
  );
};

Map.propTypes = {
  onClick: PropTypes.func,
  onMarkerClick: PropTypes.func,
  markers: markersShape,
  sx: PropTypes.object,
};

Map.defaultProps = {
  onMapClick: null,
  onMarkerClick: noop,
  markers: [],
  sx: {},
};

export default memo(Map);
