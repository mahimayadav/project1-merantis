import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/apiServices';
import { utilService } from '../../../utilServices';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultant-report',
  templateUrl: './consultant-report.component.html',
  styleUrls: ['./consultant-report.component.scss']
})
export class ConsultantReportComponent {

  loginFormViaId: FormGroup;
  getAllReports: any = [
    {
      "_id": "661791f146eae82e724b400e",
      "reportName": "string",
      "previousReview": "string",
      "requestReview": "string",
      "userId": "66179152abb0d9cfa4ac9a92",
      "sNo": 2,
      "__v": 0
    },
    {
      "_id": "661791f946eae82e724b4011",
      "reportName": "string",
      "previousReview": "string",
      "requestReview": "string",
      "userId": "66179152abb0d9cfa4ac9a92",
      "sNo": 3,
      "__v": 0
    },
    {
      "_id": "66179eea46eae82e724b4014",
      "reportName": "string",
      "previousReview": "string",
      "requestReview": "string",
      "userId": "66179152abb0d9cfa4ac9a92",
      "sNo": 4,
      "__v": 0
    }

  ];
  downloadReport:any='';
  getId:any;
  selectedData:any;
  isSelected:boolean =false;
  constructor(private router: Router, private apiService: ApiService,private fb: FormBuilder, private toastrService: ToastrService, private utilsService:utilService,
    private route: ActivatedRoute) { 
      this.loginFormViaId = this.fb.group({
        reportName: ['', Validators.required],
        previous_review: ['', Validators.required],
        request_review: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    this.getAllReportsData();
  }

  get lf() {
    return this.loginFormViaId.controls
}

  getAllReportsData() {
    this.apiService.getAllUserReport().subscribe({
      next: (queryParams) => {
        console.log('queryParams', queryParams);

        if (queryParams?.error) {
          this.toastrService.error(queryParams?.error?.message)
        }
        else if (queryParams) {
          console.log(queryParams, "data")
          // this.getAllReports = queryParams;
        }
      }
    })
  }

  // viewReportDetails() {
  //   this.router.navigate(['view-profile'], { relativeTo: this.route });
  // }

  deleteReportById(id:any) {


    this.utilsService.confirmDialog().then((result) => {
      if (result.value) {
     
     
        this.apiService.getDeleteUserReport(id).subscribe({
          next: (queryParams) => {
            console.log('queryParams', queryParams);
    
            this.toastrService.success(queryParams?.message)
          }
        })
    }
  });

  }

  reviewRequest(id:any) {


    this.utilsService.confirmDialogRequestReview().then((result) => {
      if (result.value) {
     
     
        // this.apiService.getDeleteUserReport(id).subscribe({
        //   next: (queryParams) => {
        //     console.log('queryParams', queryParams);
    
        //     this.toastrService.success(queryParams?.message)
        //   }
        // })
    }
  });

  }

  updateReportById(data:any){
    console.log(data,"data")
    this.getId = data.id
    this.loginFormViaId.get('reportName')?.patchValue(data.reportName)
    this.loginFormViaId.get('previous_review')?.patchValue(data.previous_review)
    this.loginFormViaId.get('request_review')?.patchValue(data.request_review)
  }

  updateReport() {
    const data = {
      "reportName": this.loginFormViaId.value.reportName,
      "previousReview": this.loginFormViaId.value.previous_review,
      "requestReview": this.loginFormViaId.value.request_review
  }

    this.apiService.getUpdateUserReport(this.getId, data).subscribe({
      next: (queryParams) => {
        console.log('queryParams', queryParams);

      }
    })

  }
  
  oncheck(event: any, data: any) {
    console.log(event.target.checked, event, "evenet")
    if (event.target.checked) {
      this.selectedData = data;
      this.isSelected = true
    } 
    else {
      this.selectedData = '';
      this.isSelected = false
    }
  }
  backTo() {
    this.router.navigate(['tabs/chatbot/user-messages']);
  }
}


