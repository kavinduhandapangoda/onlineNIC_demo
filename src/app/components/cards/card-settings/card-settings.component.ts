import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {DataService} from "src/app/data.service"
import {Request} from "src/app/request"

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit {
  
  request = new Request();
  constructor(private router:Router, private dataservice:DataService) {}

  ngOnInit(): void {}

  onSubmit(){
    // console.log(this.request

     this.dataservice.insertData(this.request).subscribe(res => {
       console.log(res);
     })
   }
}
