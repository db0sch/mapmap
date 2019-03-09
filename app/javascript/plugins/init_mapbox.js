import mapboxgl from 'mapbox-gl';


const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
};

const addMarkerToMap = (map, marker) => {
  return new mapboxgl.Marker().setLngLat([ marker.lng, marker.lat ]).addTo(map);
}

const initMapbox = (element) => {
  if (element) {
    mapboxgl.accessToken = element.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
    return map;
  }
};

export { initMapbox, fitMapToMarkers, addMarkerToMap };
