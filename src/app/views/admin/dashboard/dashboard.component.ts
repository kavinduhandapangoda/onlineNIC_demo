import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {DataService} from "src/app/data.service"

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})

export class DashboardComponent implements OnInit {
  userString:any = localStorage.getItem("userRole");
  userEmail:any = localStorage.getItem("useremail");

  constructor(private router:Router, private dataservice:DataService) { }

  ngOnInit() {
    
  }
}
