import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/adminService';
import { AuthService } from 'src/app/services/authService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  error: any;
  userLoginForm: FormGroup;
  submitted: boolean = false;
  userLogin: any = this.as.getUserNameSelect;
  loader: boolean = false
  constructor(private router: Router, private fb: FormBuilder,private as: AdminService,private location:Location, private toastrService: ToastrService, private activateroute: ActivatedRoute, private authService: AuthService) {
    this.userLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    })
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  get f() {
    return this.userLoginForm.controls
  }

  showSignup() {
    // document.getElementById("signupid").style.display = "flex";
    // document.getElementById("loginid").style.display = "none";
  }

  onContinue() {
    console.log(this.userLoginForm.value, "login value")
    this.submitted = true;
    if (this.userLoginForm.invalid) {
      return
    }

    let data = {
      "email": this.userLoginForm.value.email
    }

    if (this.userLoginForm.valid) {
      this.authService.forgotPass(data).subscribe({
        next: (queryParams) => {
          console.log('queryParams', queryParams);
         
          if(queryParams?.error){
            this.toastrService.error(queryParams?.error?.message)
          }
          else if(queryParams?.message){
            this.toastrService.success(queryParams?.message)
            this.router.navigate(['/auth/reset-password'])
            }
        }
      })
    }
  }

  backToLogin() {
    this.location.back()
}
}


