import { Component, Inject, OnInit, ViewChild, ElementRef, Input, NgZone } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {

  title: string = 'AGM project2';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  presentalert: boolean;
  popup: boolean;
  @ViewChild('search',{static:false})
  public searchElementRef: ElementRef;

  constructor(private route: Router, private alert: AlertController, private ngZone: NgZone, private mapsAPILoader: MapsAPILoader) { }

    //, private mapsAPILoader: MapsAPILoader
  
  ngOnInit() 
  {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((values) => { 
          console.log(values)
          this.latitude = values.coords.latitude;
          this.longitude = values.coords.longitude;
      });
    }
    this.presentalert = true;
    this.test();
  }

  test(){
    this.popup == false;
    if(this.presentalert == true){
      this.presentAlert();
    }
    if(this.popup == true){
      this.showPosition();
      this.mapsLoader();
    }
  }

  mapsLoader(){
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }


  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: any) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
  

 async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'Confirmations',
      header: 'Allow app to use your location:',
      buttons: [
        {text: 'When using the app',
        handler: () => {
          this.popup = true;
          this.presentalert = false;
          this.test();
        }},
        {text: 'Always',
        handler: () => {
          this.popup = true;
          this.presentalert = false;
          this.test();
        }},
        {text: 'Never',
        handler: () => {
          this.route.navigate(['login'])
        }},
      ]
  });
  this.popup = true;
  await alert.present();
 }

async showPosition() {
    const alert = await this.alert.create({
      cssClass: 'Confirmations',
      header: 'Current Location',
      message: 'Latititude: ' + this.latitude + ', Longitude: ' + this.longitude,
      buttons: [
        {text: 'OK'}
    ]
    });
    await alert.present();
  }

  Back(){  
    this.route.navigate(['login'])
}
}