import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/adminService';
import { AuthService } from 'src/app/services/authService';
import { environment } from 'src/environments/environment.prod';
declare const google: any;

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  error: any;
  userLoginForm: FormGroup;

  // loginFormViaPassword: FormGroup;

  submitted: boolean = false;
  userLogin: any = this.as.getUserNameSelect;
  showPassword: boolean = false;
  loader: boolean = false
  subscriptions: Subscription = new Subscription();
  isTrueOtp: boolean = false;
  isOtpSend: boolean = false;
  otpSent = false;
  API_URL: string = environment.clientId;
  user: any
  loggedIn: any

  constructor(private router: Router, private authService1: SocialAuthService, private fb: FormBuilder, private as: AdminService, private toastrService: ToastrService, private activateroute: ActivatedRoute, private authService: AuthService) {
    this.userLoginForm = this.fb.group({
      user_name: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, , Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
    this.authService1.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user, "user")
    });
  }

  signInWithFB(): void {
    this.authService1.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService1.signOut();
  }

  get f() {
    return this.userLoginForm.controls
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
    this.router.navigate(['/auth/user-register'])
  }

  onLogin() {
    console.log(this.userLoginForm.value, "login value")
    this.submitted = true;
    if (this.userLoginForm.invalid) {
      return
    }

    let data = {
      "email": this.userLoginForm.value.user_name,
      "password": this.userLoginForm.value.password
    }

    if (this.userLoginForm.valid ) {
      this.authService.signin(data).subscribe({
        next: (queryParams) => {
          console.log('queryParams', queryParams);

          if (queryParams?.error) {
            this.toastrService.error(queryParams?.error?.message)
          }
          else if (queryParams?.message) {
            console.log(queryParams, "queryParams")
            localStorage.setItem('userToken', JSON.stringify(queryParams?.accessToken))
            this.toastrService.success(queryParams?.message)
            this.router.navigate(['/tabs/chatbot/user-messages'])
          }
        }
      })
  
  }

  }

  onUserSignUp() {
    this.router.navigate(['/auth/user-register'])
  }

  onForgotPassword() {
    this.router.navigate(['/auth/forgot-password'])
  }


  termsandcondition() {

  }
}

