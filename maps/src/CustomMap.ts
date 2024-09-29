/// <reference types="@types/google.maps" />

export class CustomMap {
  private googleMap: google.maps.Map


  constructor(htmlId: string) {
    const mapElement = document.getElementById(htmlId);
    if (mapElement) {
      console.log('inside')
      this.googleMap = new google.maps.Map(mapElement, {
        zoom: 1,
        center: {
          lat: 22.5,
          lng: 82.5
        }
      });
    } else {
      console.error("Map element not found.");
    }
  }
}

