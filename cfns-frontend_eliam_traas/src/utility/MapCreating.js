import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import esriConfig from '@arcgis/core/config';
import config from './config';

export const createMap = () => {
  esriConfig.apiKey = config.ARC_GIS_API_KEY;

  const map = new Map({
    basemap: "arcgis-topographic"
  });

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
