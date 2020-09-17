import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MatDialogModule, } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AgmCoreModule } from '@agm/core/lib/core.module';
//import { MapsAPIWrapper, AgmMap } from '@agm/core';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatDialogModule,
    BrowserAnimationsModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCiYPfg_zOdMhxyyLSkUvi121pzdH6KAbU',
    //   libraries: ['places']
    // })
  ],
  providers: [
    StatusBar,
    SplashScreen,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    AngularFirestore
    //,MapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
