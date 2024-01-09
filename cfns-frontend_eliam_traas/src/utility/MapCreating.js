// MapUtils.js
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import esriConfig from '@arcgis/core/config';

export const createMap = () => {
  const apiKey = "AAPKe0e926b6b4e7413aaea425b81eb287c6Dx0BBJiXRPfoDCI2KvvtE3gEkY_O2SdTbwnQhviMjZgrSBIpHajYcYrQKKjLVnN3"; // Jouw API-sleutel hier

  esriConfig.apiKey = apiKey;

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

  return view; // Return the view instance for verdere bewerkingen indien nodig
};
