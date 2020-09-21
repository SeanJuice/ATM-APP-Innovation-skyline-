import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-imei',
  templateUrl: './imei.page.html',
  styleUrls: ['./imei.page.scss'],
})
export class ImeiPage implements OnInit {

  constructor(private route: Router, private alert: AlertController) { }

  ngOnInit() {
  }

  back(){
    this.route.navigate(['login'])
  }

  async new() {

    const alert = await this.alert.create({
      cssClass: 'Confirmations',
      header: 'IMEI Authorization Email Sent to Registered Email.',
      subHeader: '**********@gmail.com',
      message: 'Please follow the IMEI Authorization Instructions.',
      buttons: [
        {text: 'Ok',
        handler: () => {
          this.route.navigate(['login'])        
        }}
    ]
    });
    await alert.present();
  }


}
