import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent {

  
  diagbosticLabData: any = [
    {
        id: 1,
        name: 'All Order',
        status: 'All Order',
        score: 200,
        color: '#0000FF',
        icon: 'fa fa-level-down',
        path: '../../../../../../assets/images/ic_bg_grapg_white.svg'
    },
    {
        id: 2,
        name: 'New Order',
        status: 'New Order',
        score: 45,
        color: '#11B3CC',
        icon: 'fa fa-globe',
        path: '../../../../../../assets/images/ic_bg_grapg_white.svg'
    },
    {
        id: 3,
        name: 'Pending',
        status: 'Pending',
        score: 55,
        color: '#F5B041',
        icon: 'fa fa-globe',
        path: '../../../../../../assets/images/ic_bg_grapg_white.svg'
    },
    {
        id: 4,
        name: 'Delivered',
        status: 'Delivered',
        score: 100,
        color: '#06AE22',
        icon: 'fa fa-eye',
        path: '../../../../../../assets/images/ic_bg_grapg_white.svg'
    },
    {
        id: 5,
        name: 'Cancelled',
        status: 'Cancelled',
        score: 55,
        color: '#EE8239',
        icon: 'fa fa-hourglass-start',
        path: '../../../../../../assets/images/ic_bg_grapg_white.svg'
    },
    ];

  orderData: any = [
    {
      id: "457896",
      emp_name: "Tyler Meyer",
      emp_id: 45869,
      age: 34,
      gender: "Male",
      email: "tyler.meyer@mail.com",
      mobile: "6589 895 458",
      lab_name: "Apollo Pharmacy",
      lab_id: "ID : 458693",
      lab_addr: "D No.6-59/6,Seetarampuram, Hyderabad Road,Krishna (Dt)",
      lab_email: "help.apollo@mail.com",
      lab_contact: "+91 98758 48698",
      total_amount: "1400",
      order_date: "22 March 22022",
      time: "10:30 Am",
      status: "Pending"
    },
    {
      id: "457896",
      emp_name: "Tyler Meyer",
      emp_id: 45869,
      age: 34,
      gender: "Male",
      email: "tyler.meyer@mail.com",
      mobile: "6589 895 458",
      lab_name: "Apollo Pharmacy",
      lab_id: "ID : 458693",
      lab_addr: "D No.6-59/6,Seetarampuram, Hyderabad Road,Krishna (Dt)",
      lab_email: "help.apollo@mail.com",
      lab_contact: "+91 98758 48698",
      total_amount: "1400",
      order_date: "22 March 22022",
      time: "10:30 Am",
      status: "Delivered"
    },
    {
      id: "457896",
      emp_name: "Tyler Meyer",
      emp_id: 45869,
      age: 34,
      gender: "Male",
      email: "tyler.meyer@mail.com",
      mobile: "6589 895 458",
      lab_name: "Apollo Pharmacy",
      lab_id: "ID : 458693",
      lab_addr: "D No.6-59/6,Seetarampuram, Hyderabad Road,Krishna (Dt)",
      lab_email: "help.apollo@mail.com",
      lab_contact: "+91 98758 48698",
      total_amount: "1400",
      order_date: "22 March 22022",
      time: "10:30 Am",
      status: "Cancelled"
    },
    {
      id: "457896",
      emp_name: "Tyler Meyer",
      emp_id: 45869,
      age: 34,
      gender: "Male",
      email: "tyler.meyer@mail.com",
      mobile: "6589 895 458",
      lab_name: "Apollo Pharmacy",
      lab_id: "ID : 458693",
      lab_addr: "D No.6-59/6,Seetarampuram, Hyderabad Road,Krishna (Dt)",
      lab_email: "help.apollo@mail.com",
      lab_contact: "+91 98758 48698",
      total_amount: "1400",
      order_date: "22 March 22022",
      time: "10:30 Am",
      status: "Pending"
    },
    {
      id: "457896",
      emp_name: "Tyler Meyer",
      emp_id: 45869,
      age: 34,
      gender: "Male",
      email: "tyler.meyer@mail.com",
      mobile: "6589 895 458",
      lab_name: "Apollo Pharmacy",
      lab_id: "ID : 458693",
      lab_addr: "D No.6-59/6,Seetarampuram, Hyderabad Road,Krishna (Dt)",
      lab_email: "help.apollo@mail.com",
      lab_contact: "+91 98758 48698",
      total_amount: "1400",
      order_date: "22 March 22022",
      time: "10:30 Am",
      status: "Delivered"
    },
    {
      id: "457896",
      emp_name: "Tyler Meyer",
      emp_id: 45869,
      age: 34,
      gender: "Male",
      email: "tyler.meyer@mail.com",
      mobile: "6589 895 458",
      lab_name: "Apollo Pharmacy",
      lab_id: "ID : 458693",
      lab_addr: "D No.6-59/6,Seetarampuram, Hyderabad Road,Krishna (Dt)",
      lab_email: "help.apollo@mail.com",
      lab_contact: "+91 98758 48698",
      total_amount: "1400",
      order_date: "22 March 22022",
      time: "10:30 Am",
      status: "Pending"
    },
    {
      id: "457896",
      emp_name: "Tyler Meyer",
      emp_id: 45869,
      age: 34,
      gender: "Male",
      email: "tyler.meyer@mail.com",
      mobile: "6589 895 458",
      lab_name: "Apollo Pharmacy",
      lab_id: "ID : 458693",
      lab_addr: "D No.6-59/6,Seetarampuram, Hyderabad Road,Krishna (Dt)",
      lab_email: "help.apollo@mail.com",
      lab_contact: "+91 98758 48698",
      total_amount: "1400",
      order_date: "22 March 22022",
      time: "10:30 Am",
      status: "Cancelled"
    }
  ];
  TotalPageSize: any;
  page = 1;
  pageSize = 4;
  p = 0;
  client_status:boolean= false;
  selected: any = 'All Order';
  selectedData:any;
  valuedate = new Date();
  isSelected:boolean = false
  model:any;

  modelOne:any;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
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
selectedClient:any=[]
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getReport() {
    // const modalRe = this.modalService.open(BookAppointmentComponent);

  }

  viewReportDetails() {
    this.router.navigate(['view-profile'], { relativeTo: this.route });
  }

    filterClaimList(value:any) {

      this.selected = value.name;
  }
  getAuthorized(data:any) {

  }
//   getKeys(key:any) {
//     let colkey = '';
//     key?.split('_').forEach((ele:any) => {
//         let element = ele.charAt(0).toUpperCase() + ele.slice(1);
//         colkey = colkey + ' ' + element;
//     })
//     if (colkey.trim() == 'Pre Auth') {
//         colkey = colkey.concat('orization');
//     }
//     if (colkey.trim() == 'Estimated Bills') {
//         colkey = colkey.replace('Estimated', 'Medical');
//     }
//     return colkey.trim();
// }
providerQRCode() {

}
oncheck(event: any,data: any) {
  console.log(event.target.checked, event, "evenet")
  if (event.target.checked) {
    this.selectedData = data;
    this.isSelected = true
  } 
  else {
    this.selectedData = '';
    this.isSelected = false
  }
  // console.log(this.selectedPatients);
}
deleteClientById() {


}
updateClientById() {


}
approved(){}
rejected(){}
}
