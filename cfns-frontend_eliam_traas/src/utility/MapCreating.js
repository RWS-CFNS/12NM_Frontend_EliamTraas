import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import esriConfig from '@arcgis/core/config';
import config from './config';

// Creeert een map met de apiKey van config.js
export const createMap = () => {
  esriConfig.apiKey = config.ARC_GIS_API_KEY;

  // Beschrijft de soort map
  const map = new Map({
    basemap: "arcgis-topographic"
  });

  // Stelt het middelpunt van de map in en zoomt in
  const view = new MapView({
    map: map,
    center: [5.0705555, 52.557611],
    zoom: 8,
    container: "viewDiv",
    constraints: {
      snapToZoom: false
    }
  });

  return view;
};
