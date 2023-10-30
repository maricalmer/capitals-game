import { pickRandomCapital } from '../utils/randomCapital';
import { Map } from './Map';

export class Marker {
  private googleMarker: google.maps.Marker;
  public cityData: {country: string, name: string, lat: number, lng: number};
  constructor(map: Map) {
    this.cityData = pickRandomCapital();
    this.googleMarker = new google.maps.Marker({
      map: map.getGoogleMapObject(),
      position: {lat: this.cityData["lat"], lng: this.cityData["lng"]},
      animation: google.maps.Animation.DROP
    });
    this.addBouncingAnimation(this.googleMarker);
    this.addContentToMarker(this.googleMarker);
  };

  addBouncingAnimation(marker: google.maps.Marker): void {
    setTimeout(function() { marker.setAnimation(google.maps.Animation.BOUNCE) }, 1000);
  };

  addContentToMarker(marker: google.maps.Marker): void {
    this.googleMarker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content:  `
                    City: ${this.cityData["name"]}<br>
                    Country: ${this.cityData["country"]}
                  `
      });
      infoWindow.open(marker.getMap(), marker);
    });
  };
};
