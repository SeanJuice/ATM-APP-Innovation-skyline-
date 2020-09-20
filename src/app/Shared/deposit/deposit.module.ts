import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositPageRoutingModule } from './deposit-routing.module';

import { DepositPage } from './deposit.page';
import { ReferenceComponent } from './reference/reference.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositPageRoutingModule
  ],
  declarations: [DepositPage,ReferenceComponent]
})
export class DepositPageModule {}
