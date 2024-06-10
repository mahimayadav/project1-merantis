import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/adminService';
import { AuthService } from 'src/app/services/authService';
import { User } from 'src/app/tabs/pages/chatbot/models';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    error: any;
    loginForm: FormGroup;
    submitted: boolean = false;
    showPassword: boolean = false;
    loader: boolean = false
    subscriptions: Subscription = new Subscription();
    isTrueOtp: boolean = false;
    isOtpSend: boolean = false;
    otpSent = false;
    userLogin: any = this.as.getUserNameSelect;
    user:any
    loggedIn:any;
    constructor(private router: Router, private fb: FormBuilder,private authService1: SocialAuthService, private as: AdminService, private toastrService: ToastrService, private authService: AuthService) {
        this.loginForm = this.fb.group({
            user_name: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', Validators.required, , Validators.minLength(6)]
        })

    }

    ngOnInit(): void {
        console.log(this.userLogin)
        sessionStorage.clear();
        this.authService1.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            console.log(user,"user")
          });
        }
      
        signInWithFB(): void {
          this.authService1.signIn(FacebookLoginProvider.PROVIDER_ID);
        }
      
        signOut(): void {
          this.authService1.signOut();
        }

    get f() {
        return this.loginForm.controls
    }




    forgetPassword() {
        this.router.navigate(['./auth/forget-password'])
    }

    consultantRegister() {
        this.router.navigate(['./auth/consultant-register'])
    }
    showSignup() {
        // document.getElementById("signupid").style.display = "flex";
        // document.getElementById("loginid").style.display = "none";
    }

    changeTextOtpPassword() {
        this.isTrueOtp = true;
    }

    changeTextOtpToPassword() {
        this.isTrueOtp = false;
    }

    loginViaEmpId() {
        console.log(this.loginForm.value, "login")
        this.submitted = true;
        if (this.loginForm.invalid) {
            return
        }

        let data = {
            "email": this.loginForm.value.user_name,
            "password": this.loginForm.value.password
        }

        if (this.loginForm.valid) {
            this.authService.signinConsultant(data).subscribe
                ({
                    next: (queryParams) => {
                        console.log('queryParams', queryParams);

                        if (queryParams?.error) {
                            this.toastrService.error(queryParams?.error?.message)
                        }
                        else if (queryParams?.message) {
                            sessionStorage.setItem('consultantToken',queryParams?.accessToken)
                            this.toastrService.success(queryParams?.message)

                            this.router.navigate(['/tabs/chatbot/consultant-messages'])


                        }
                    }
                })
        }

    }

    onUserSignUp() {
        this.router.navigate(['/auth/consultant-register'])
    }
    
    onForgotPassword() {
        this.router.navigate(['/auth/forgot-password'])
    }

}

