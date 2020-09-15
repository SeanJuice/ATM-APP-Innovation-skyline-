import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionoptionsPageRoutingModule } from './transactionoptions-routing.module';

import { TransactionoptionsPage } from './transactionoptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionoptionsPageRoutingModule
  ],
  declarations: [TransactionoptionsPage]
})
export class TransactionoptionsPageModule {}
