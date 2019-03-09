import { Controller } from "stimulus"
import { initMapbox, addMarkerToMap, fitMapToMarkers } from '../plugins/init_mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
export default class extends Controller {

  connect() {
    this.map = initMapbox(this.element);
    this.setMarkers();
  }

  setMarkers() {
    this.markers.forEach(marker => addMarkerToMap(this.map, marker));
    this.fitBounds();
  }

  fitBounds() {
    fitMapToMarkers(this.map, this.markers);
  }

  get markers() {
    return JSON.parse(this.data.get("markers"));
  }
}
