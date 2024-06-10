import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PagesComponent } from './pages.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AddCreditComponent } from './add-credit/add-credit.component';
import { PaymentRemainingTableComponent } from './payment-remaining-table/payment-remaining-table.component';
// import { UserListComponent } from './chatbot/user-list/user-list.component';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import { ViewConsultantDetailsComponent } from './view-consultant-details/view-consultant-details.component';
import { AddDocumentComponent } from './chatbot/add-document/add-document.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'admin-list',
        component: AdminListComponent

      },
      {
        path: 'credit',
        component: AddCreditComponent

      },
      {
        path: 'payment-remaining',
        component: PaymentRemainingTableComponent

      },
      {
        path: 'consultant-list',
        component: ConsultantListComponent

      },
      {
        path: 'view-consultant',
        component: ViewConsultantDetailsComponent

      },
      // {
      //   path: 'user-report',
      //   component: UserListComponent

      // },
      {
        path: 'add-document',
        component: AddDocumentComponent

      },

    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('../../auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'chatbot',
    loadChildren: () => import('./chatbot/chatbot.module').then(m => m.ChatbotModule)
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
