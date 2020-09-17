import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddQrImagesPage } from './add-qr-images.page';

const routes: Routes = [
  {
    path: '',
    component: AddQrImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddQrImagesPageRoutingModule {}
