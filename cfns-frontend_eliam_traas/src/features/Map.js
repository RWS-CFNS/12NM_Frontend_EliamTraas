import React, { useEffect } from 'react';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import esriConfig from '@arcgis/core/config';

const MapComponent = () => {
  useEffect(() => {
    esriConfig.apiKey = "YOUR_API_KEY";

    const map = new Map({
      basemap: "arcgis-topographic"
    });

    const view = new MapView({
      map: map,
      center: [-118.805, 34.027],
      zoom: 13,
      container: "viewDiv",
      constraints: {
        snapToZoom: false
      }
    });
  }, []);

  return <div id="viewDiv" style={{ width: '100%', height: '500px' }}></div>;
};

export default MapComponent;
