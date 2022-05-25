import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  collapseShow = 'hidden';
  userString:any = ""
  constructor() {
  }

  roleName: string;

  ngOnInit() {
    this.userString = localStorage.getItem("username");
    console.log(this.userString);
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
