import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  videoWidth = 0;
  videoHeight = 0;
  constraints = {
      video: {
          facingMode: "environment",
          width: { ideal: 4096 },
          height: { ideal: 2160 }
      }
  };

  popup: boolean;


  constructor(/*private qrScanner: QRScanner*/ private renderer:Renderer2, private alert: AlertController, private route: Router) { }


  ngOnInit() {
    this.popup = false;
    this.startCamera();
}

startCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
        navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
    } else {
        alert('Sorry, camera not available.');
    }
}

attachVideo(stream) {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
        this.videoHeight = this.videoElement.nativeElement.videoHeight;
        this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
}

capture() {
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
    this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
    console.log(this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0))
}

handleError(error) {
    console.log('Error: ', error);
}


qrResultString: string;

clearResult(): void {
  this.qrResultString = null;
}

onCodeResult(resultString: string) {
  this.qrResultString = resultString;
}


async Transact(QR)
{
    this.bankConfirmation(QR);
}

async bankConfirmation(QR) {
  const alert = await this.alert.create({
    cssClass: 'Confirmations',
    header: 'Bank:',
    message: 'FNB',
    buttons: [
      {text: 'OK',
      handler: () => {
        this.popup = true;
        this.test(QR);
      }}
  ]
  });
  await alert.present();
}

test(QR){
  if(this.popup == true){
    this.presentAlert(QR);
}
}

async presentAlert(QR) {
    const alert = await this.alert.create({
      cssClass: 'Confirmations',
      header: 'Banking Pin:',
      inputs: [
        {
          name: 'pin',
          placeholder: 'e.g 1234'
        }],
      buttons: [
        {text: 'Proceed',
        handler: () => {
          console.log("Validated: " + QR);
        }},
    ]
    });
    await alert.present();
    await this.route.navigate(['login'])
  }
}
