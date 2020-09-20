import { AngularFirestore } from '@angular/fire/firestore';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import {formatDate } from '@angular/common';
import { AlertController, IonDatetime, ToastController } from '@ionic/angular';
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
  popup2: boolean;
  homescreen: boolean;
  atm: any;
  qrData : Boolean;
//
  UIDs =  ['c4e2e74e-51fb-4ecf-b856-4e2e2b9e0453',
  '4b0d7a03-1e9d-4a8c-a0e8-47f937b1940d',
  '21d3ccd9-7220-46e8-98ee-4db4c52ac498',
  '1fd69bc4-6a00-40ff-8d67-4506e84a0240',
  '7ddd46a8-6824-44ff-bec6-e485c6361cd1']


  constructor(/*private qrScanner: QRScanner*/ private renderer:Renderer2, 
    private alert: AlertController, private route: Router,private db:AngularFirestore,private toastController:ToastController) { }

  ngOnInit() {
    this.popup = false;
    this.homescreen = false;
    this.qrData = false;
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
  if(this.qrData == false){
    this.successNotification(this.qrResultString);
    this.qrData = true;
  }
  else if(this.qrData == true){
    console.log("QR code already scanned: " + this.qrResultString);
  }
}


async Transact(QR)
{
    this.successNotification(QR);
}

test(QR,Atm?){
  if(this.popup == true){
    this.locationConfirmation(QR,Atm);
  }
  if(this.popup2 == true){
    this.presentAlert(QR);
  }
  if(this.homescreen == true){
    this.route.navigate(['transactionoptions']) 
    this.SuccessfulTransaction()
  }
}
//Popup1
async successNotification(QR) {
  let Atm = this.Validation(QR)
 
  const alert = await this.alert.create({
    cssClass: 'Confirmations',
    header: 'Successfully captured',
    message:` Bank: ${Atm.BankName}`,
    buttons: [
      {text: 'Cancel',
      handler: () => {
        this.route.navigate(['transactionoptions'])
      }},
      {text: 'Proceed',
      handler: () => {
        this.popup = true;
        this.test(QR,Atm);      
      }}
  ]
  });
  await alert.present();
}

//Popup2 
async locationConfirmation(QR,Atm) {
  this.popup = false;
  const alert = await this.alert.create({
    cssClass: 'Confirmations',
    header: 'Location Confrimation:',
    subHeader: `Street Name :${Atm.StreetName}`,
    message: `<img src="${Atm.Url}"> `,
    
    buttons: [
      {text: 'Cancel',
      handler: () => {
        this.route.navigate(['transactionoptions'])
      }},
      {text: 'OK',
      handler: () => {
        this.popup2 = true;
        this.test(QR);
      }}
  ]
  });
  await alert.present();
}
//Popup3
async presentAlert(QR) {
    const alert = await this.alert.create({
      cssClass: 'Confirmations',
      header: 'Banking Pin:',
      inputs: [
        {
          type:'number',
          name: 'pin',
          placeholder: 'e.g 1234'
        }],
      buttons: [
        {text: 'Cancel',
        handler: () => {
          this.route.navigate(['transactionoptions'])
        }},
        {text: 'Proceed',
        handler: () => {
          this.popup2 = false;
          this.homescreen = true;
          this.test(QR);
          console.log("Validated: " + QR + " (with amount: " + sessionStorage["WithdrawalAmount"] + ")");
        }},
    ]
    });
    await alert.present();
  }

  //ATM checking 
  Validation(QR)
  {
    if(QR == this.UIDs[0])
    {
      let ATM = { 
        Url:"https://i.ibb.co/9bWdsVc/Capture.png", 
        StreetName:"Bosman St, Pretoria Central, Pretoria, 0001",
        BankName:'Capitec'
     };
     return ATM
    }
    else if(QR == this.UIDs[1])
    {
      let ATM = { 
        Url:"https://i.ibb.co/ws52HCC/standard-b.png", 
        StreetName:"Elandspoort 357-Jr, Pretoria, 0132",
        BankName:'Standard Bank'
     };
     return ATM
    }
    else if(QR == this.UIDs[2])
    {
      let ATM = { 
        Url:"https://i.ibb.co/YQm8LXY/nedbank.png", 
        StreetName:"Belle Ombre, 269 Boom St, Asiatic Bazaar, Pretoria, 0001",
        BankName:'Nedbank'
     };
     return ATM
    } 
    else if(QR == this.UIDs[3])
    {
      let ATM = { 
        Url:"https://i.ibb.co/HG1y5Y3/fnb.png", 
        StreetName:"338 Bronkhorst St, Nieuw Muckleneuk, Pretoria, 0181",
        BankName:'FNB'
     };
     return ATM
    }  else if(QR == this.UIDs[4])
    {
      let ATM = { 
        Url:"https://i.ibb.co/LCyMWTD/Absa.png", 
        StreetName:"Menlo Park Centre, 13th St, Menlo Park, Pretoria, 1236",
        BankName:'ABSA'
     };
     return ATM
    }
  }

  back(){
    this.route.navigate(['login'])
  }
  async SuccessfulTransaction() {

    let now = new Date();

    const toast = await this.toastController.create({
      message: 'Bank Notification:-)  R' + sessionStorage["WithdrawalAmount"] + '.00 paid from Savings Account ...0875421 @Smartapp - Ref 48456; ' + now.toString(),
      position:"top",
      cssClass: "MyToasts",
      duration: 7000,
      
    })
    
    toast.present();
    toast.onDidDismiss().then(() => {
      this.takeMoneyNotification()
  });
  }
  async takeMoneyNotification() {
    const toast = await this.toastController.create({
      message: 'Please proceed to take your money: R' + sessionStorage["WithdrawalAmount"] + '.00 Savings Account ...0875421 @Smartapp - Ref 48456',
      position:"top",
      cssClass: "MyToasts",
      duration: 3500,
      
    }).then();
    toast.present();
    this.route.navigate(['login'])

  }
}
