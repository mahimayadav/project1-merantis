import { Component, VERSION, AfterViewChecked, ElementRef, ViewChild, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/apiServices";
import { USERS } from "./data";
import { Message, STATUSES } from "./models";
declare var bootstrap: any;

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  statuses = STATUSES;
  isMessages: boolean = false;
  activeUser: any;
  users = USERS;
  expandStatuses = false;
  expanded = false;
  pingTimeout: any;
  isViewReports: boolean = false;
  isViewUploadDoc: boolean = false;
  isLogged: boolean = true;

  isCollapsed: boolean = false;
  messageReceivedFrom = {
    img: 'https://cdn.livechat-files.com/api/file/lc/img/12385611/371bd45053f1a25d780d4908bde6b6ef',
    name: 'Media bot'
  }
  constructor(private router: Router, private apiService: ApiService,
    private route: ActivatedRoute) { }
  @ViewChild('scrollMe') private myScrollContainer: ElementRef | {} | undefined

  ngOnInit() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    });
    this.setUserActive(USERS[0])
    this.scrollToBottom();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  addNewMessage(inputField: any) {
    const val = inputField.value?.trim()
    if (val.length) {
      this.activeUser.messages.push({ type: 'sent', message: val })
      this.activeUser.ws.send(
        JSON.stringify({ id: this.activeUser.id, message: val })
      );
    }
    inputField.value = '';
  }

  scrollToBottom(): void {
    try {
      // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  setUserActive(user: any) {
    this.activeUser = user;
    this.connectToWS();
  }
  onActivate() {
    console.log("router outlet event");
    window.scrollTo(0, 10);
  }
  connectToWS() {
    if (this.activeUser.ws && this.activeUser.ws.readyState !== 1) {
      this.activeUser.ws = null;
      this.activeUser.status = STATUSES.OFFLINE;
    }
    if (this.activeUser.ws) {
      return;
    }
    const ws = new WebSocket('wss://compute.hotelway.ai:4443/?token=TESTTOKEN');
    this.activeUser.ws = ws;
    ws.onopen = (event) => this.onWSEvent(event, STATUSES.ONLINE);
    ws.onclose = (event) => this.onWSEvent(event, STATUSES.OFFLINE);
    ws.onerror = (event) => this.onWSEvent(event, STATUSES.OFFLINE);
    ws.onmessage = (result: any) => {
      const data = JSON.parse(result?.data || {});
      const userFound = this.users.find(u => u.id === data.id);
      if (userFound) {
        userFound.messages.push(
          new Message('replies', data.message)
        )
      }
    };
  }

  onWSEvent(event: any, status: STATUSES) {
    this.users.forEach(u => u.ws === event.target ? u.status = status : null)
  }

  onClickLogin() {

  }

  getAllUserReports() {
    this.isViewReports = true;
    this.isViewUploadDoc = false;
    // this.router.navigate(['tabs/chatbot/user-reports']);
  }

  uploadDocuments() {
    this.isViewUploadDoc = true;
    this.isViewReports = false;
  }

  getDashboard() {
    this.isViewReports = false;
    this.isViewUploadDoc = false;
  }

  onLogout() {
    this.router.navigate(['/']);
  }
  
  getSessionPastById() {
    let getId: any
    this.apiService.getSessionById(getId).subscribe({
      next: (queryParams) => {
        console.log('queryParams', queryParams);

      }
    })
  }


  getSessionForLast30Days() {
    this.apiService.getSessionLast30days().subscribe({
      next: (queryParams) => {
        console.log('queryParams', queryParams);

      }
    })
  }
}



