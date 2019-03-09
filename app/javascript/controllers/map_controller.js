import { Controller } from "stimulus"
import { initMapbox, addMarkerToMap, fitMapToMarkers } from '../plugins/init_mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
export default class extends Controller {

  connect() {
    this.map = initMapbox(this.element);
    this.setMarkers();
  }

  setMarkers() {
    this.markerInstances = this.markers.map(marker => addMarkerToMap(this.map, marker));
    this.fitBounds();
  }

  fitBounds() {
    fitMapToMarkers(this.map, this.markers);
  }

  handleChange() {
    console.log(this.map)
    this.markerInstances.forEach(marker => marker.remove())
    this.setMarkers();
  }

  get markers() {
    return JSON.parse(this.data.get("markers"));
  }
}
