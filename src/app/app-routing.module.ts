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
    path: 'virtualreality-qr',
    loadChildren: () => import('./shared/virtualreality-qr/virtualreality-qr.module').then( m => m.VirtualrealityQRPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
