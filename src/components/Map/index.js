import React, { memo } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { map } from 'lodash';
import Loader from 'components/Loader';
import Marker from './components/Marker';
import { anchorPoint, mockedMarkers, zoom } from './consts';

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '100%',
      }}
      center={anchorPoint}
      zoom={zoom}
    >
      {map(mockedMarkers, (marker, index) => (
        <Marker key={index} {...marker} />
      ))}
    </GoogleMap>
  );
};

export default memo(Map);
