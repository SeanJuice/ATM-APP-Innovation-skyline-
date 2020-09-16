import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualrealityQRPageRoutingModule } from './virtualreality-qr-routing.module';

import { VirtualrealityQRPage } from './virtualreality-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualrealityQRPageRoutingModule
  ],
  declarations: [VirtualrealityQRPage]
})
export class VirtualrealityQRPageModule {}
