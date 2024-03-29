import { useEffect } from 'react';
import useUserData from './useUserData';

const useUserLocation = () => {
  const { position: userPosition, setUserData } = useUserData();

  useEffect(() => {
    if (userPosition) {
      return;
    }

    const geolocationAPI = navigator.geolocation;
    if (geolocationAPI) {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position;

        setUserData({
          position: {
            lat: coords.latitude,
            lng: coords.longitude,
            accuracy: coords.accuracy,
          },
        });
      });
    }
  }, []);

  return userPosition;
};

export default useUserLocation;
