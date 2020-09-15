import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})


export class MapPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation(): void {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.")
  }
}

  showPosition(position): void {
    alert("Current Location -> Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
    console.log("Position: " + position + " Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude)
  }

  populateTable(x,y){
    // const mapProp= {
    //   center:new google.maps.LatLng(x,y),
    //   zoom:5,
    // };
    // const map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

    Back(){
      this.route.navigate(['login'])
    }
}