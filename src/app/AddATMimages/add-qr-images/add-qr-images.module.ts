import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddQrImagesPageRoutingModule } from './add-qr-images-routing.module';

import { AddQrImagesPage } from './add-qr-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddQrImagesPageRoutingModule
  ],
  declarations: [AddQrImagesPage]
})
export class AddQrImagesPageModule {}
