import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ToastrModule } from 'ngx-toastr';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';

@NgModule({
    declarations: [
     AuthComponent,
     SignUpComponent,
     AdminSignupComponent,
     LoginComponent,
     AdminLoginComponent,
     UserLoginComponent,
     UserSignupComponent,
     ForgotPasswordComponent,
     ResetPasswordComponent,
     TermsConditionComponent,  
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        SocialLoginModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            timeOut: 2000, // 5 seconds
            closeButton: true,
            progressBar: true,
          })
    ],
    providers:[
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
              autoLogin: false,
              providers: [
                {
                  id: GoogleLoginProvider.PROVIDER_ID,
                  provider: new GoogleLoginProvider(
                    // '71275214743-d64a5scjr2ife38hu8l7mfbm94api935.apps.googleusercontent.com'
                    '175975710684-u4jigtf9acp8hpfqcs5ena4a2kihqlpc.apps.googleusercontent.com'
                  )
                },
                {
                  id: FacebookLoginProvider.PROVIDER_ID,
                  provider: new FacebookLoginProvider(
                    // '71275214743-d64a5scjr2ife38hu8l7mfbm94api935.apps.googleusercontent.com'
                    '175975710684-u4jigtf9acp8hpfqcs5ena4a2kihqlpc.apps.googleusercontent.com'
                    )
                }
              ],
              onError: (err) => {
                console.error(err);
              }
            } as SocialAuthServiceConfig,
          }
    ]
})
export class AuthModule {
}
