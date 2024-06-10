import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.scss']
})
export class ConsultantListComponent {


  paymentTable: any = [
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
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  viewReportDetails() {
    this.router.navigate(['view-profile'], { relativeTo: this.route });
  }

deleteClientById() {


}
updateClientById() {


}
}

