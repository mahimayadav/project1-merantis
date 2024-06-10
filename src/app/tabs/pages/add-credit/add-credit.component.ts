import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.component.html',
  styleUrls: ['./add-credit.component.scss']
})
export class AddCreditComponent {
  error: any;
  loginFormViaId: FormGroup;

  // loginFormViaPassword: FormGroup;

  submitted: boolean = false;

  showPassword: boolean = false;
  loader:boolean =false
  subscriptions: Subscription = new Subscription();
  tab = 'Employee_ID';
  isTrueOtp: boolean = false;
  isOtpSend: boolean = false;
  otpSent = false;
  slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 1,
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
              }
          },
          {
              breakpoint: 575,
              settings: {
                  slidesToShow: 1,
              }
          },
          {
              breakpoint: 400,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  };

  itemContent = [
      {name: 'Health Claims'},
      {name: 'Ausis'},
      {name: 'QC'},
      {name: 'Provider'},

  ]

  constructor(private router: Router, private fb: FormBuilder) {
      this.loginFormViaId = this.fb.group({
          platform: [''],
          employee_id: ['', Validators.required],
          password: ['', Validators.required]
      })

      // this.loginFormViaPassword = this.fb.group({
      //     pass_platform: ['', Validators.required],
      //     email_mobile_no: ['', Validators.required],
      //     pwd: ['', Validators.required]
      // })
  }

  ngOnInit(): void {
      // if (this.state)
      //     this.state.subscribe((s: IState) => {
      //         this.error = s.error
      //     })
      sessionStorage.clear();
  }

  get lf() {
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

  loginViaEmpId(){}

}


