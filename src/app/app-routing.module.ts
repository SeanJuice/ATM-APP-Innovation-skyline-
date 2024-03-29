
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./User management/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./User management/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./Shared/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'transactionoptions',
    loadChildren: () => import('./shared/transactionoptions/transactionoptions.module').then( m => m.TransactionoptionsPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./Shared/scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'add-qr-images',
    loadChildren: () => import('./AddATMimages/add-qr-images/add-qr-images.module').then( m => m.AddQrImagesPageModule)
  },
  {
    path: 'virtualreality-qr',
    loadChildren: () => import('./shared/virtualreality-qr/virtualreality-qr.module').then( m => m.VirtualrealityQRPageModule)
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./User management/loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./Shared/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'balance',
    loadChildren: () => import('./balance/balance.module').then( m => m.BalancePageModule)
  }, {
    path: 'deposit',
    loadChildren: () => import('./Shared/deposit/deposit.module').then( m => m.DepositPageModule)
  },
  {
    path: 'imei',
    loadChildren: () => import('./Shared/imei/imei.module').then( m => m.ImeiPageModule)
  }

] 

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

