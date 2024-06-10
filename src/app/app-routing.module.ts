import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './guards';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./welcome/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/pages/pages.module').then(m => m.PagesModule),
    // canActivate: [AuthGuard] 
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
