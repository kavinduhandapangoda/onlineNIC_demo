import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {DataService} from "src/app/data.service"
import {Request} from "src/app/request"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  RECobj:string = localStorage.getItem("selectedRQ")
  obgv2:any = JSON.parse(this.RECobj)
  email:string = this.obgv2.email
  RID:string = this.obgv2.RID
  username:string = this.obgv2.name
  status:string = this.obgv2.status

  request = new Request()

  constructor(private router:Router, private dataservice:DataService) {}

  ngOnInit(): void {
    console.log(this.obgv2)
    this.request.email = this.email
    this.request.RID = this.RID
  }

  updateRequest(){
    this.dataservice.updateRequest(this.request).subscribe(res => {
      console.log(res);
    })
  }

  updateRequestError(){
    this.dataservice.updateRequestError(this.request).subscribe(res => {
      console.log(res);
    })
  }
 

}
