import { AfterViewInit, Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/apiServices';
import { PdfService } from 'src/app/services/pdf.service';
declare const PDFObject: any;

@Component({
  selector: 'app-generated-documents',
  templateUrl: './generated-documents.component.html',
  styleUrls: ['./generated-documents.component.scss']
})
export class GeneratedDocumentsComponent implements OnInit {
  name = 'Generated Documents PDF';
  pdfData:any;
  isLoading = false;
  constructor(private pdfService: PdfService,private router: Router, private apiService: ApiService,private toastrService: ToastrService,) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getThePdfData();
    // this.pdfService.getPdf().subscribe({
    //   next: (res) => {
    //     this.pdfData = res;
    //     console.log(this.pdfData,"data")
    //     this.isLoading = false;
    //     if (this.pdfData) {
    //       this.handleRenderPdf(this.pdfData);
    //     }
    //   },
    // });
  }

  getThePdfData(){
    let data =
      {
        "sessionID":"123"
    }
    
    this.apiService.getConversation(data).subscribe({

      next: (queryParams) => {
        console.log('getquestion', queryParams);
             this.pdfData = queryParams;
        console.log(this.pdfData,"data")
        this.isLoading = false;
        if (this.pdfData) {
          this.handleRenderPdf(this.pdfData);
        }
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
  handleRenderPdf(data:any) {
    const pdfObject = PDFObject.embed(data, '#pdfContainer');
  }
}
