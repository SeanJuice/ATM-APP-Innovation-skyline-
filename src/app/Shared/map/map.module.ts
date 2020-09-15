import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapPageRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';
import {} from 'googlemaps';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule
  ],
  declarations: [MapPage]
})
export class MapPageModule {

  detailsShow = true;
  CreditcardDetails = false

  constructor(private route: Router) { }

ngOnInit() {
  alert("hey");
  this.getLocation()
}
flip()
{
  this.detailsShow =false
  this.CreditcardDetails =true
}

// x = document.getElementById("demo");

getLocation(): void {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(this.showPosition);
} else {
  // x.innerHTML = "Geolocation is not supported by this browser.";
  console.log("Geolocation is not supported by this browser.")

}
}

showPosition(position): void {
// x.innerHTML = "Latitude: " + position.coords.latitude +
// "<br>Longitude: " + position.coords.longitude;
console.log("Position: " + position + " Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude)
//this.populateTable(position.coords.latitude,position.coords.longitude)
}

populateTable(x,y){
  // const mapProp= {
  //   center:new google.maps.LatLng(x,y),
  //   zoom:5,
  // };
  // const map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }

  Transactions(){
    this.route.navigate(['login'])
  }
}

