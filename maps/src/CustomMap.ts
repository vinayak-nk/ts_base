/// <reference types="@types/google.maps" />

import { User } from "./User"
import { Company } from './Company';

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


  async addMarker(mappable: User | Company): Promise<void> {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    const marker = new AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      title: 'Uluru'
    });
  }


  /*
  async addUserMarker(user: User): Promise<void> {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    const marker = new AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      },
      title: 'Uluru'
    });
  }

  addCompanyMarker(company: Company): void {}
  */



}

