import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

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

  constructor(/*private qrScanner: QRScanner*/ private renderer:Renderer2, 
    private alert: AlertController, private route: Router,private db:AngularFirestore,private toastController:ToastController) { }


  ngOnInit() {
    this.popup = false;
    this.homescreen = false;
    this.qrData = false;
    this.startCamera();
  }

  /////////////////
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

  next()
    {
        this.route.navigate(['deposit/Details'])
    }

    async successNotification(QR) {

     
      const alert = await this.alert.create({
        cssClass: 'Confirmations',
        header: 'Successfully captured. Please place the money in the cash container.',
      //  message:` Bank: ${Atm.BankName}`,
        buttons: [
          {text: 'Cancel',
          handler: () => {
            this.route.navigate(['transactionoptions'])
          }},
          {text: 'Proceed',
          handler: () => {
            this.route.navigate(['transactionoptions']) 
            this.SuccessfulTransaction()
          }}
      ]
      });
      setTimeout(()=> alert.present(),3000);
    }
    async SuccessfulTransaction() {

      let now = new Date();

      const toast = await this.toastController.create({
        message: `<img src="../assets/images/notification.jpg" width="20" height="20">` + 'Deposit to ' + sessionStorage["DepositName"] + ': Account ' + sessionStorage["Account"] + ' Successful ;' + now.toString(),
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
        message: `<img src="../assets/images/notification.jpg" width="20" height="20">` +  'Please Notify ' + sessionStorage["DepositName"] + ' to check their account for deposit. Reference: ' + sessionStorage["Reference"] ,
        position:"top",
        cssClass: "MyToasts",
        duration: 5000,
        
      }).then();
      toast.present();
    }
}
