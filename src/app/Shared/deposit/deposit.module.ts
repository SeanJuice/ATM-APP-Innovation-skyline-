import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositPageRoutingModule } from './deposit-routing.module';

import { DepositPage } from './deposit.page';
import { ReferenceComponent } from './reference/reference.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
@NgModule({
  entryComponents:[],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositPageRoutingModule,
    ZXingScannerModule
  ],
  declarations: [DepositPage,ReferenceComponent,DetailsComponent]
})
export class DepositPageModule {}
