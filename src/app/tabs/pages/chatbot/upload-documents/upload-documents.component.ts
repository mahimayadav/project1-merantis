import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/apiServices';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss']
})
export class UploadDocumentsComponent {
  error: any;
  loginFormViaId: FormGroup;

  isUploading: boolean = false
  documentImage: any;
  loader: boolean = false
  myFiles: any = [];
  imageName: any
  imageUrl: boolean = false
  loading: boolean = false
  @Input() sessionId: any
  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService, private toastrService: ToastrService,) {
    this.loginFormViaId = this.fb.group({
      uploadFile: [[]],
    })
  }

  ngOnInit(): void {
    console.log(this.sessionId,"sessionId")
    // if (this.state)
    //     this.state.subscribe((s: IState) => {
    //         this.error = s.error
    //     })
    sessionStorage.clear();
  }

  get lf() {
    return this.loginFormViaId.controls
  }

  // OnClick of button Upload
  OnFileChange(event: any) {
    console.log('File change', event, event.target.files);
    this.documentImage = true
    // this.files = event.target.files;
    // this.imageName = this.files[0].name;
    // this.imageUrl = true;
    // const multiReader:any = {}
    // const filesAmount = event.target.files.length;
    for (var i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
    }
    console.log(this.myFiles, "myFiles")

  }

  processDocument() {
    this.isUploading = true;
    const formData = new FormData();
    for (let i = 0; i < this.myFiles.length; i++) {
      formData.append('files', this.myFiles[i])
    }
    formData.append('sessionId', this.sessionId)

    this.apiService.getSessionReportUpload(formData).subscribe({

      next: (queryParams) => {
        console.log('upload report', queryParams);
        this.toastrService.success("uploaded successfully...")
        // this.activeModal.close('Modal Closed');
      },
      error: (queryParams) => {
        console.log(queryParams, "qq")
        if (queryParams?.error?.error?.message) {
          this.toastrService.error(queryParams?.error?.error?.message)
          this.router.navigate(['/auth/user-login'])

        }
        else if (queryParams?.error?.message) {
          console.log(queryParams, "queryParams")
        }
      }

    }
    )
  }

}


