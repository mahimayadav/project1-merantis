import { Component, VERSION, AfterViewChecked, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Message, STATUSES } from "../models";
import { USERS } from "../data";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/apiServices";
import { error } from "jquery";
import { ToastrService } from "ngx-toastr";
declare var bootstrap: any;


@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit, AfterViewChecked {
  statuses = STATUSES;
  isMessages: boolean = false;
  isQuestions: boolean = false;
  activeUser: any;
  users = USERS;
  expandStatuses = false;
  expanded = false;
  pingTimeout: any;
  isViewReports: boolean = false;
  isViewUploadDoc: boolean = false;
  isLogged: boolean = true;
  userToken = sessionStorage.getItem('userToken')
  isCollapsed: boolean = true;
  sessionData: any = {}
  getQuestions:any
  isQuestion : boolean = false
  sessionId:any
  messageReceivedFrom = {
    img: 'https://cdn.livechat-files.com/api/file/lc/img/12385611/371bd45053f1a25d780d4908bde6b6ef',
    name: 'Media bot'
  }
  constructor(private router: Router, private apiService: ApiService, private toastrService: ToastrService,
    private route: ActivatedRoute) { }
  @ViewChild('scrollMe') private myScrollContainer: ElementRef | {} | undefined

  ngOnInit() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    });
    this.setUserActive(USERS[0])
    this.scrollToBottom();
    const myTooltipEl = document.getElementById('myTooltip')
const tooltip = bootstrap.Tooltip.getOrCreateInstance(myTooltipEl)


  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  addNewMessage(inputField: any) {
    const val = inputField.value?.trim()
    console.log(val, inputField, "input")
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
  onClick(type: any) {
    console.log(type, "type")
    this.createSession(type);
    this.getQuestionByType(type)
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
    this.router.navigate(['/auth/user-login']);
  }

  // getSessionPastById() {
  //   let getId: any
  //   this.apiService.getSessionById(getId).subscribe({
  //     next: (queryParams) => {
  //       console.log('queryParams', queryParams);

  //     }
  //   })
  // }

  // getSessionForLast30Days() {
  //   this.apiService.getSessionLast30days().subscribe({
  //     next: (queryParams) => {
  //       console.log('queryParams', queryParams);

  //     }
  //   })
  // }

  createSession(type: any) {
    let data = {
      "type": type
    }
    this.apiService.getCreateSession(data).subscribe({

      next: (queryParams:any) => {
       

        this.sessionData = queryParams
        this.sessionId = queryParams._id
        console.log('create session', this.sessionId, queryParams);
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

  getQuestionByType(type: any) {
    let indexData = type == 'patent' ? "1": "1"
   

    let data = {
      "type": type,
      "index":"1",
    }
    this.apiService.getquestionByType(data).subscribe({

      next: (queryParams) => {
        console.log('getquestion', queryParams);

        this.getQuestions = queryParams;
        this.isQuestion = true
        if(queryParams) {
          this.isQuestion = true
          console.log("hello")
        }
      },
      error: (queryParams) => {
        console.log(queryParams, "qq")
        if (queryParams?.error?.error?.message) {
          this.toastrService.error(queryParams?.error?.message)

        }
        else if (queryParams?.error?.error?.message) {
          this.toastrService.error(queryParams?.error?.error?.message)
          this.router.navigate(['/auth/user-login'])
          console.log(queryParams, "queryParams")
        }
      }

    }
    )
  }

  onClickSendMessage(message: any) {
    console.log(message, "message")
    const val = message?.value.trim()
    if (val.length) {
      this.activeUser.messages.push({ type: 'sent', message: val })
      this.activeUser.ws.send(
        JSON.stringify({ id: this.activeUser.id, message: val })
      );
console.log(this.getQuestions,this.getQuestions.data.questionID,this.getQuestions.data,"quetsion")
     let data = {
      "userAnswer":val,
      "questionId":`${this.getQuestions?.data?.questionID}`,
      "sessionID":`${this.sessionId }`
  }
      this.apiService.createUserAnswer(data).subscribe({

        next: (queryParams) => {
          console.log('createAnswer', queryParams);

          if(queryParams) {
            console.log("hello")
          }
        },
        error: (queryParams) => {
          console.log(queryParams, "qq")
          if (queryParams?.error?.error?.message) {
            this.toastrService.error(queryParams?.error?.message)
  
          }
          else if (queryParams?.error?.error?.message) {
            this.toastrService.error(queryParams?.error?.error?.message)
            this.router.navigate(['/auth/user-login'])
            console.log(queryParams, "queryParams")
          }
        }
  
      }
      )
    }
    message.value = '';
  }


}



