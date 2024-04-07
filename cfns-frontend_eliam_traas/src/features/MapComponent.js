import React, { useEffect } from 'react';
import { createMap } from '../utility/MapCreating';
import config from '../utility/config';

// Laad de map component
const MapComponent = () => {
  useEffect(() => {
    const apiKey = config.ARC_GIS_API_KEY;
    const view = createMap(apiKey);

    return () => {
      if (view) {
        view.container = null;
        view.destroy();
      }
    };
  }, []);

  return <div id="viewDiv" style={{ width: '100%', height: '920px' }}></div>;
};

export default MapComponent;
