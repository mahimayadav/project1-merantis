import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path:'user-login',
    component: UserLoginComponent
  },
  {
    path:'user-register',
    component: UserSignupComponent
  },
  {
    path:'admin-login',
    component: AdminLoginComponent
  },
  {
    path:'admin-register',
    component: AdminSignupComponent
  },
  {
    path:'consultant-login',
    component: LoginComponent
  },
  {
    path:'consultant-register',
    component: SignUpComponent
  },
  {
    path:'reset-password',
    component: ResetPasswordComponent
  },
  {
    path:'forgot-password',
    component: ForgotPasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
