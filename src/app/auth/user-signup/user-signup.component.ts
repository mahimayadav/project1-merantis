import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/authService';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent {

error: any;
signUpAdminForm: FormGroup;

// loginFormViaPassword: FormGroup;

submitted: boolean = false;

showPassword: boolean = false;
loader: boolean = false
subscriptions: Subscription = new Subscription();
tab = 'Employee_ID';
isTrueOtp: boolean = false;
isOtpSend: boolean = false;
otpSent = false;
user:any
loggedIn:any
termandConditionAccepted=''
isAccepted:boolean = false
constructor(private router: Router, private fb: FormBuilder,private authService1: SocialAuthService, private authService: AuthService,private toastrService: ToastrService,) {
  this.signUpAdminForm = this.fb.group({
    rePassword: ['', [Validators.required,, Validators.minLength(6)]],
    password: ['', [Validators.required,, Validators.minLength(6)]],
    company: ['', Validators.required],
    user_name: ['', Validators.required],
    employee_email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
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
  return this.signUpAdminForm.controls
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

onRegister() {
  console.log(this.signUpAdminForm.value, "form")
  this.submitted = true;
  if (this.signUpAdminForm.invalid) {
    return
  }

  let data = {
    "email": this.signUpAdminForm.value.employee_email,
    "username": this.signUpAdminForm.value.user_name,
    "password": this.signUpAdminForm.value.password,
    "repassword": this.signUpAdminForm.value.rePassword,
    "company":this.signUpAdminForm.value.company
}

  if (this.signUpAdminForm.valid) {
    if(this.isAccepted){
    this.authService.signup(data).subscribe ({
      next: (queryParams) => {
        console.log('queryParams', queryParams);
       
        if(queryParams?.error){
          this.toastrService.error(queryParams?.error?.message)
        }
        else if(queryParams?.message){
          this.toastrService.success(queryParams?.message)
          this.router.navigate(['/auth/user-login'])
        }
      }
    })
  }
  else {
    this.toastrService.error("Please accept the Term and Condtion..")
}
}
}

valueChange(event:any) {
  if(event.target.checked){
    this.isAccepted = event.target.checked
  }
  else {
    this.isAccepted = false
    this.termandConditionAccepted = ''
  }
}

onAdminLogin() {
  this.router.navigate(['/auth/user-login'])
}

termsandcondition(){
  
}

}


