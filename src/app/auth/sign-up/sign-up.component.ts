import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/authService';
import { ConfirmPasswordValidator } from '../confirm-password.validators';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
    error: any;
    signUPForm: FormGroup;

    // loginFormViaPassword: FormGroup;

    submitted: boolean = false;

    showPassword: boolean = false;
    loader: boolean = false
    subscriptions: Subscription = new Subscription();
    tab = 'Employee_ID';
    isTrueOtp: boolean = false;
    isOtpSend: boolean = false;
    otpSent = false;
    files: any;
    imageName: any
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
        { name: 'Health Claims' },
        { name: 'Ausis' },
        { name: 'QC' },
        { name: 'Provider' },

    ]
    fileList: any;
    user:any
    loggedIn:any;
    termandConditionAccepted=''
    isAccepted:boolean = false
    constructor(private router: Router, private fb: FormBuilder,private authService1: SocialAuthService, private authService: AuthService, private toastrService: ToastrService,) {
        this.signUPForm = this.fb.group({
            confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
            employee_email: ['', [Validators.required, Validators.email,  Validators.minLength(6),
                Validators.maxLength(30), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            employee_name: ['', Validators.required],
            industry_specific: ['', Validators.required],
            expertise: ['', Validators.required],
            uploadFile: ['', Validators.required],
            phone_number: ['',[ Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
            rate_in_rupee: ['', Validators.required]

        },
        {
          validator: ConfirmPasswordValidator("password", "confirmPassword")
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
        return this.signUPForm.controls
    }

    valueChange(event:any) {
        if(event.target.checked){
            this.isAccepted = event.target.checked
        }
        else {
            this.isAccepted = false;
            this.termandConditionAccepted = ''
        }
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

    onSubmit() {
        console.log(this.signUPForm.value, "register data")
        this.submitted = true;
        if (this.signUPForm.invalid) {
            return
        }
        const formData: FormData = new FormData();
        formData.append('email', this.signUPForm.value.employee_email);
        formData.append('name', this.signUPForm.value.employee_name);
        formData.append('industry_expert', this.signUPForm.value.industry_specific);
        formData.append('expertise', this.signUPForm.value.expertise);
        formData.append('CV', this.imageName);
        formData.append('address_and_phone', this.signUPForm.value.phone_number);
        formData.append('rate_per_document', this.signUPForm.value.rate_in_rupee);
        formData.append('password', this.signUPForm.value.password);
       
            if (this.signUPForm.valid) {
                console.log("value")

                   if(this.isAccepted) {
                this.authService.signupConsultant(formData).subscribe({
                    next: (queryParams) => {
                        console.log('queryParams', queryParams);

                        if (queryParams?.error) {
                            this.toastrService.error(queryParams?.error?.message)
                        }
                        else if (queryParams?.message) {
                            this.toastrService.success(queryParams?.message)
                            this.router.navigate(['/auth/consultant-login'])
                        }
                    }
                })
            }
            else {
                this.toastrService.error("Please accept the Term and Condtion..")
            }
        }
       

    }

    onUserLogin() {
        this.router.navigate(['/auth/consultant-login'])
    }

    OnFileChange(event: any) {
        console.log('File change', event, event.target.files);
        this.files = event.target.files;
        this.imageName = this.files[0].name;

        // this.diagnosticForm.get('uploadFile')?.patchValue(this.imageName)

    }

    termsandcondition() {}
}