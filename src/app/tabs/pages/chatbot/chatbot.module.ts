import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot.component';
import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ConsultantChatMessageComponent } from './consultant-chat-message/consultant-chat-message.component';
import { PaymentRemainingComponent } from '../payment-remaining/payment-remaining.component';
import { AddCreditComponent } from '../add-credit/add-credit.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ReportsComponent } from './reports/reports.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { UserReportComponent } from './reports/user-report/user-report.component';
import { ConsultantReportComponent } from './reports/consultant-report/consultant-report.component';
import { CreateReportConsultantComponent } from './reports/consultant-report/create-report-consultant/create-report-consultant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GeneratedDocumentsComponent } from './generated-documents/generated-documents.component';
import { PreviousSessionComponent } from './previous-session/previous-session.component';
import { VideoLinksComponent } from './video-links/video-links.component';


@NgModule({
  declarations: [
    ChatbotComponent,
    ChatMessagesComponent,
    ConsultantChatMessageComponent,
    PaymentRemainingComponent,
    AddCreditComponent,
    AddDocumentComponent,
    UploadDocumentsComponent,
    ReportsComponent,
    UserReportComponent,
    ConsultantReportComponent,
    CreateReportConsultantComponent,
    SidebarComponent,
    GeneratedDocumentsComponent,
    PreviousSessionComponent,
    VideoLinksComponent

  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [ChatbotComponent]
})
export class ChatbotModule { }
