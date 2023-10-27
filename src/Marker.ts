import { countriesData } from '../utils/capitals';
import { Map } from './Map';

export class Marker {
  private googleMarker: google.maps.Marker;
  public cityData: {country: string, name: string, lat: number, lng: number};
  constructor(map: Map) {
    this.cityData = this.pickRandomCapital();
    this.googleMarker = new google.maps.Marker({
      map: map.googleMap,
      position: {lat: this.cityData["lat"], lng: this.cityData["lng"]},
      animation: google.maps.Animation.DROP
    });
    this.addBouncingAnimation(this.googleMarker);
    this.addContentToMarker(this.googleMarker);
  };

  addBouncingAnimation(marker: google.maps.Marker): void {
    setTimeout(function() { marker.setAnimation(google.maps.Animation.BOUNCE) }, 1000);
  };

  pickRandomCapital(): { country: string; name: string; lat: number; lng: number } {
    const randomIndex = Math.floor(Math.random() * 251);
    const capitalData = {
      country: countriesData[randomIndex][0],
      name: countriesData[randomIndex][1],
      lat: countriesData[randomIndex][2],
      lng: countriesData[randomIndex][3]
    }
    return capitalData;
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
