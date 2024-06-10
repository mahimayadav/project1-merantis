import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    new_value: string;
    selected: boolean;
    opened: boolean;
    isEdit: boolean;
    submenu: Array<any>;
}

export const ROUTES: RouteInfo[] = [
   
    {
        title: 'Dashboard / Chat Window', path: '/tabs/chatbot/user-messages', icon: '',

        class: '', opened: false, new_value: '', selected: true, isEdit: false,
        submenu:[],
    },
    {
        title: 'Reports', path: '/tabs/chatbot/user-reports',
        icon: '',
        class: '',
        opened: false,
        new_value: '',
        selected: true,
        isEdit: false,
        submenu: [
        ]
    },
  
  {
    title: 'Upload Documents', path: '/tabs/chatbot/upload-document',
    icon: '',
    class: '',
    opened: false,
    new_value: '',
    selected: true,
    isEdit: false,
    submenu: [
    ]
},
{
  title: 'Previous Session', path: '/tabs/chatbot/previous-session',
  icon: '',
  class: '',
  opened: false,
  new_value: '',
  selected: true,
  isEdit: false,
  submenu: [
  ]
},
{
  title: 'Generate The Document For Existing Session', path: '/tabs/chatbot/generated-documents',
  icon: '',
  class: '',
  opened: false,
  new_value: '',
  selected: true,
  isEdit: false,
  submenu: [
  ]
},
{
  title: 'Video Links / Tutorial', path: '/tabs/chatbot/video-links',
  icon: '',
  class: '',
  opened: false,
  new_value: '',
  selected: true,
  isEdit: false,
  submenu: [
  ]
},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapsed: boolean = false;
  openedMenu: string = "";
  isOpen :boolean= false;
  openedSubMenu: string = "";
  isSubmenuOpen : boolean= false;
  public menuItems: any = [];


  constructor(
      public router: Router,
      // private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
          this.isCollapsed = true;
      });
  }

  alert() {
      // const modalRef = this.modalService.open(IntegratedConnectorsComponent, {backdropClass: 'light-blue-backdrop'});
      // modalRef.componentInstance.name = 'World';
  }

  openCloseMenu() {
      this.isOpen = !this.isOpen;
  }
  openCloseSubMenu() {
      this.isSubmenuOpen = !this.isSubmenuOpen;
  }
}
