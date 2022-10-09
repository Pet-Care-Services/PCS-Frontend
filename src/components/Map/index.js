import React, { memo } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { isFunction, map } from 'lodash';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Marker from './components/Marker';
import { anchorPoint, zoom } from './consts';
import { markersShape } from './shapes';

const Map = ({ markers, onClick, sx }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

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

  const onMarkerClick = ({ lat, lng }) => {
    console.log('Marker: ', lat, lng);
  };

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '100%',
        ...sx,
      }}
      center={anchorPoint}
      zoom={zoom}
      clickableIcons={false}
      onClick={onMapClick}
    >
      {map(markers, (marker, index) => (
        <Marker
          key={index}
          onMapClick={onMapClick}
          onMarkerClick={onMarkerClick}
          {...marker}
        />
      ))}
    </GoogleMap>
  );
};

Map.propTypes = {
  onClick: PropTypes.func,
  markers: markersShape,
  sx: PropTypes.object,
};

Map.defaultProps = {
  onMapClick: null,
  markers: [],
  sx: {},
};

export default memo(Map);
