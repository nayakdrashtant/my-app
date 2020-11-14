import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  showrow1 = false
  showrow2 = false
  showrow3 = false

  lat = 45.527351;
  lng = -73.660454;
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  constructor() { }

  ngOnInit() {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: this.coordinates,
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        zoom: 12
      }
    );
  
    const marker = new google.maps.Marker({
      position: { lat: this.lat, lng: this.lng },
      icon: "../../assets/drawables/site_logo_rotated.png",
      map: map
    });
  }
}
