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
  ref: string;
  account: string;

  ngOnInit() {}
  
  store(e)
    {
      sessionStorage["Reference"] = e.target.ref.value;
      sessionStorage["Account"] = e.target.account.value;
     // this.router.navigate(['deposit/Details'])
     this.next();
    }

    async next() {

      const alert = await this.alert.create({
        cssClass: 'Confirmations',
        header: 'Deposit in Bank Accounts of',
        subHeader: sessionStorage["DepositName"],
        message:'Bank Account: ' + sessionStorage["Account"],
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
