import { Component, Inject, OnInit, ViewChild, ElementRef, Input, NgZone } from '@angular/core';
//import { MapsAPILoader, AgmMap } from '@agm/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
// import { AgmCoreModule } from '@agm/core/lib/core.module';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})


export class MapPage implements OnInit {

  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild('search',{static:false})
  public searchElementRef: ElementRef;

  constructor(private route: Router, public dialog: MatDialog, private alert: AlertController,
    private positionalert: AlertController, private ngZone: NgZone) { }
    //private mapsAPILoader: MapsAPILoader

  ngOnInit() {
    console.log("map log");
    this.presentAlert();
  }
  //   this.mapsAPILoader.load().then(() => {
  //     this.setCurrentLocation();
  //     this.geoCoder = new google.maps.Geocoder;

  //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //       types: ["address"]
  //     });
  //     autocomplete.addListener("place_changed", () => {
  //       this.ngZone.run(() => {
  //         //get the place result
  //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  //         //verify result
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }

  //         //set latitude, longitude and zoom
  //         this.latitude = place.geometry.location.lat();
  //         this.longitude = place.geometry.location.lng();
  //         this.zoom = 12;
  //       });
  //     });
  //   });
  // }

  // // Get Current Location Coordinates
  // private setCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 8;
  //       this.getAddress(this.latitude, this.longitude);
  //     });
  //   }
  // }


  // markerDragEnd($event: any) {
  //   console.log($event);
  //   this.latitude = $event.coords.lat;
  //   this.longitude = $event.coords.lng;
  //   this.getAddress(this.latitude, this.longitude);
  // }

  // getAddress(latitude, longitude) {
  //   this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
  //     console.log(results);
  //     console.log(status);
  //     if (status === 'OK') {
  //       if (results[0]) {
  //         this.zoom = 12;
  //         this.address = results[0].formatted_address;
  //       } else {
  //         window.alert('No results found');
  //       }
  //     } else {
  //       window.alert('Geocoder failed due to: ' + status);
  //     }

  //   });
  // }


  async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'Confirmations',
      header: 'Allow app to use your location:',
      buttons: [
        {text: 'When using the app',
        handler: () => {
          this.getLocation();
        }},
        {text: 'Always',
        handler: () => {
          this.getLocation();
        }},
        {text: 'Never'}
    ]
    });
    await alert.present();
  }

  async getLocation() {
    console.log("getLocation()")
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.")
    }
}

async showPosition(position) {
    console.log("showPosition()")
    console.log("Position: " + position + " Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude)

    const alert = await this.positionalert.create({
      cssClass: 'Confirmations',
      header: 'Your loaction: Latitude:',
      buttons: [
        {text: 'OK'}
    ]
    });    
    await alert.present();
    //alert("Current Location -> Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
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