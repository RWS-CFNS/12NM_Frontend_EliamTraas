// MapComponent.js
import React, { useEffect } from 'react';
import { createMap } from '../utility/MapCreating';
import config from '../utility/config'; // Importeer de configuratie

const MapComponent = () => {
  useEffect(() => {
    const apiKey = config.ARC_GIS_API_KEY; // Gebruik de API-sleutel vanuit de configuratie
    const view = createMap(apiKey);

    return () => {
      if (view) {
        view.container = null;
        view.destroy();
      }
    };
  }, []);

  return <div id="viewDiv" style={{ width: '100%', height: '900px' }}></div>;
};

export default MapComponent;
