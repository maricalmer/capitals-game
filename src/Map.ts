import { mapStyling } from '../utils/map';
import { Marker } from './Marker';

export class Map {
  googleMap: google.maps.Map;
  marker: Marker;
  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      zoom: 2.2,
      minZoom: 2.2,
      center: {
        lat: 20,
        lng: 20
      },
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      keyboardShortcuts: false,
      gestureHandling: "cooperative",
      styles: mapStyling
    });
    this.marker = new Marker(this);
  };

  resetMapView(): void {
    this.googleMap.setCenter({lat: 20, lng: 20});
    this.googleMap.setZoom(2.2);
  }
}
