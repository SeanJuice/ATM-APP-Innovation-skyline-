import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionoptionsPage } from './transactionoptions.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionoptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionoptionsPageRoutingModule {}
