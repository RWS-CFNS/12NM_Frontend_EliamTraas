// MapComponent.js
import React, { useEffect } from 'react';
import { createMap } from '../utility/MapCreating';

const MapComponent = () => {
  useEffect(() => {
    const apiKey = process.env.REACT_APP_ARCGIS_API_KEY; // Get API key from environment variables
    const view = createMap(apiKey);

    return () => {
      // Perform any cleanup (e.g., view.destroy()) if necessary
    };
  }, []);

  return <div id="viewDiv" style={{ width: '100%', height: '500px' }}></div>;
};

export default MapComponent;
