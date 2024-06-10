import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/adminService';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
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
  constructor(private router: Router, private fb: FormBuilder,private as: AdminService, private toastrService: ToastrService, private activateroute: ActivatedRoute, private authService: AuthService) {
    this.userLoginForm = this.fb.group({
      user_name: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['',[ Validators.required, , Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  get f() {
    return this.userLoginForm.controls
  }

  onResetPassword() {
    let id = ''
    console.log(this.userLoginForm.value, "login value")
    this.submitted = true;
    if (this.userLoginForm.invalid) {
      return
    }

    let data = {
      "password": this.userLoginForm.value.password
    }

    if (this.userLoginForm.valid) {
      this.authService.resetPass(id,data).subscribe({
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
  }

  onUserSignUp() {
    this.router.navigate(['/auth/user-register'])
  
}
}


