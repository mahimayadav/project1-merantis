import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDocumentComponent } from './add-document/add-document.component';
import { NewUpdateComponent } from './new-update/new-update.component';
import { ChatbotComponent } from './chatbot.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ConsultantChatMessageComponent } from './consultant-chat-message/consultant-chat-message.component';
import { AddCreditComponent } from '../add-credit/add-credit.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { CreateReportConsultantComponent } from './reports/consultant-report/create-report-consultant/create-report-consultant.component';
import { ConsultantReportComponent } from './reports/consultant-report/consultant-report.component';
import { UserReportComponent } from './reports/user-report/user-report.component';
import { GeneratedDocumentsComponent } from './generated-documents/generated-documents.component';
import { PreviousSessionComponent } from './previous-session/previous-session.component';
import { VideoLinksComponent } from './video-links/video-links.component';

const routes: Routes = [
  {
    path: '',
    component: ChatbotComponent,
    children: [
      {
        path: 'add-document',
        component: AddDocumentComponent

      },
      {
        path: 'upload-document',
        component: UploadDocumentsComponent

      },
      {
        path: 'new-update',
        component: NewUpdateComponent

      },
      {
        path: 'user-messages',
        component: ChatMessagesComponent

      },
      {
        path: 'user-reports',
        component: UserReportComponent

      },
      {
        path: 'consultant-report',
        component: ConsultantReportComponent

      },
      {
        path: 'create-consultant-report',
        component: CreateReportConsultantComponent

      },
      {
        path: 'consultant-messages',
        component: ConsultantChatMessageComponent

      },
      {
        path: 'video-links',
        component: VideoLinksComponent

      },
      {
        path: 'previous-session',
        component: PreviousSessionComponent

      },
      {
        path: 'generated-documents',
        component: GeneratedDocumentsComponent

      },
      {
        path: 'add-credit',
        component: AddCreditComponent
      }


    ]
  },
  



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatbotRoutingModule { }
