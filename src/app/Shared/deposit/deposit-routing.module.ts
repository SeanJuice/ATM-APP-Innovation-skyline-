import { DetailsComponent } from './details/details.component';
import { ReferenceComponent } from './reference/reference.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositPage } from './deposit.page';

const routes: Routes = [
  {
    path: '',
    component: DepositPage,
    
  },{
    path: 'Reference',
    component: ReferenceComponent
  },{
    path: 'Details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositPageRoutingModule {}
