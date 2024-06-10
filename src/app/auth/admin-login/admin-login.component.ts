import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/authService';
import { Location } from '@angular/common';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  error: any;
  loginFormViaId: FormGroup;

  // loginFormViaPassword: FormGroup;

  submitted: boolean = false;

  showPassword: boolean = false;
  loader: boolean = false
  subscriptions: Subscription = new Subscription();
  isTrueOtp: boolean = false;
  isOtpSend: boolean = false;
  otpSent = false;
  user:any
  loggedIn:any
  constructor(private router: Router, private fb: FormBuilder,private authService1: SocialAuthService,private location:Location, private toastrService: ToastrService, private activateroute: ActivatedRoute, private authService: AuthService) {
    this.loginFormViaId = this.fb.group({
      user_name: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['',[ Validators.required, , Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
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
    return this.loginFormViaId.controls
  }


  forgetPassword() {
    this.router.navigate(['./auth/forget-password'])
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

  onAdminSugnup() {
    this.router.navigate(['/auth/admin-register'])
  }

  onLogin() {
    console.log(this.loginFormViaId.value, "login value")
    this.submitted = true;
    if (this.loginFormViaId.invalid) {
      return
    }

    let data = {
      "email": this.loginFormViaId.value.user_name,
      "password": this.loginFormViaId.value.password
    }

    if (this.loginFormViaId.valid) {
      this.authService.signin(data).subscribe({
        next: (queryParams) => {
          console.log('queryParams', queryParams);
         
          if(queryParams?.error){
            this.toastrService.error(queryParams?.error?.message)
          }
          else if(queryParams?.message){
            sessionStorage.setItem('adminToken',queryParams?.accessToken)
            this.toastrService.success(queryParams?.message)
            this.router.navigate(['/tabs/admin-list'])
            }
        }
      })
    }
  }

  onForgotPassword(){
    this.router.navigate(['/auth/forgot-password'])
    
  }

  loginViaEmpId() {
    console.log("login")
  } 

  termsandcondition() {

  }
}

