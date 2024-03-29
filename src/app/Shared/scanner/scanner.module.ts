import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScannerPageRoutingModule } from './scanner-routing.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScannerPage } from './scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannerPageRoutingModule,
    ZXingScannerModule
  ],
  declarations: [ScannerPage]
})
export class ScannerPageModule {}
