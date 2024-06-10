import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/apiServices';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
 

  getAllReports: any = [
    {
      id: "457896",
      report_name: "Tyler Meyer",
      request_expert_review: "sadbaksjdbkajsdbj",
      expert_review: "sjfgdsjfjsd",

    },
    {
      id: "457896",
      report_name: "Tyler Meyer",
      request_expert_review: "sadbaksjdbkajsdbj",
      expert_review: "sjfgdsjfjsd",

    },
    {
      id: "457896",
      report_name: "Tyler Meyer",
      request_expert_review: "sadbaksjdbkajsdbj",
      expert_review: "sjfgdsjfjsd",

    },
    {
      id: "457896",
      report_name: "Tyler Meyer",
      request_expert_review: "sadbaksjdbkajsdbj",
      expert_review: "sjfgdsjfjsd",

    },
    {
      id: "457896",
      report_name: "Tyler Meyer",
      request_expert_review: "sadbaksjdbkajsdbj",
      expert_review: "sjfgdsjfjsd",

    }

  ];
  constructor(private router: Router, private apiService: ApiService, private toastrService: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllReportsData();
  }

  getAllReportsData() {
    this.apiService.getAllUserReport().subscribe({
      next: (queryParams) => {
        console.log('queryParams', queryParams);

        if (queryParams?.error) {
          this.toastrService.error(queryParams?.error?.message)
        }
        else if (queryParams?.message) {
          console.log(queryParams, "data")
          this.toastrService.success(queryParams?.message)
        }
      }
    })
  }

  viewReportDetails() {
    this.router.navigate(['view-profile'], { relativeTo: this.route });
  }

  deleteReportById(id:any) {
    this.apiService.getDeleteUserReport(id).subscribe({
      next: (queryParams) => {
        console.log('queryParams', queryParams);
      }
    })

  }

  updateReportById(id:any) {
    
    const data = {
      "reportName": " Updated Sample Report by user",
      "previousReview": "Updated Previous review content",
      "requestReview": "Updated Request review content"
  }

    this.apiService.getUpdateUserReport(id, data).subscribe({
      next: (queryParams) => {
        console.log('queryParams', queryParams);

      }
    })

  }
}

