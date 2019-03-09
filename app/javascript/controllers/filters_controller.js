import { Controller } from "stimulus"
import MarkerService from "../services/marker_service"

export default class extends Controller {
  static targets = [ "map", "form" ]

  connect() {
    console.log(this.markers)
  }

  handleChange() {
    const form = new FormData(this.formTarget)
    console.log(this.formTarget)
    console.log(form)
    // const queryString = Object.keys(form).map(key => key + '=' + form[key]).join('&');
    MarkerService.asyncFetch(form).then((data) => {
      this.markers = JSON.stringify(data);
    });
  }

  dispatchChange() {
    this.mapTarget.dispatchEvent(new Event('change'))
  }
  get markers() {
    return this.mapTarget.dataset.mapMarkers
  }

  set markers(data) {
    this.mapTarget.dataset.mapMarkers = data;
    this.dispatchChange();
  }

  // set markers() {
  //   this.mapTarget.dataset.map.markers
  // }
}
