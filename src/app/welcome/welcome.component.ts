import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent  implements OnInit {
  
  chartOptions = {
    theme: "light2",
    backgroundColor: "transparent",
    
    data: [
      {
        type: "pyramid",
        indexLabelFontSize: 12,
        // toolTipContent: "{indexLabel}: {y}%",
        title:"tag",
        color: "{color}", 
        dataPoints: [
            { y: 19, indexLabel: "Providing information about latest AI/ML developments",color:"#65FFF6" },
            { y: 1,color:"#fffff"},
            { y: 18, indexLabel: "Making a diagnosis, which may necessitate redefinition of the problem",color:"#FF6565" },
            { y: 1,color:"#fffff"},
            { y: 17, indexLabel: "Assisting with implementation of recommended solutions",color:"#7075FF" },
            { y: 1,color:"#fffff"},
            { y: 16, indexLabel: "Facilitating client AI/ML learning—that is, how to resolve similar problems in the future",color:"#E498FF" },
            { y: 1,color:"#fffff"},
            { y: 15, indexLabel: "Solving problems by using AI/ML accelerators",color:"#2298FF" },
            { y: 1,color:"#fffff"},
            { y: 14, indexLabel: "Making recommendations based on the diagnosis",color:"#2CD997" },
            { y: 1,color:"#fffff"},
            { y: 13, indexLabel: "Building a consensus and commitment around corrective action",color:"#FFD500" },
            { y: 1,color:"#fffff"},
            { y: 12, indexLabel: "Permanently improving organizational effectiveness through AI/ML accelerators and industry expert assisted guidance",color:"#FF8900" }
 
        ],
    },]
}
  constructor(
      private router: Router
  ) {
  }
  ngOnInit(): void {
  
  }

}
