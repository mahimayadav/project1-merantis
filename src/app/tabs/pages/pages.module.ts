import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';;
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { PaymentRemainingTableComponent } from './payment-remaining-table/payment-remaining-table.component';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import { ViewConsultantDetailsComponent } from './view-consultant-details/view-consultant-details.component';


@NgModule({
  declarations: [
    PagesComponent,
    AdminListComponent,
    AddConsultantComponent,
    PaymentRemainingTableComponent,
    ConsultantListComponent,
    ViewConsultantDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
