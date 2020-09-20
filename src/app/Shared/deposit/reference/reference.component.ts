import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent implements OnInit {

  constructor(private  router:Router,private alert:AlertController,private toastController:ToastController) { }

  ngOnInit() {}
  
  nexrt()
    {
        this.router.navigate(['deposit/Details'])
    }
    async next(QR) {

     
      const alert = await this.alert.create({
        cssClass: 'Confirmations',
        header: 'Deposit in Bank Accounts of',
        subHeader:` Mr SS Mlangeni`,
        message:'Bank Account: 0220293929293',
        buttons: [
          {text: 'Cancel',
          role: 'cancel',
          handler: () => {
         
          }},
          {text: 'Confirm',
          handler: () => {
            this.router.navigate(['deposit/Details'])
           
          }}
      ]
      });
      await alert.present();
    }


}
