import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {DataService} from "src/app/data.service"
import {Request} from "src/app/request"

@Component({
  selector: 'app-graman',
  templateUrl: './graman.component.html',
  styleUrls: ['./graman.component.css']
})
export class GramanComponent implements OnInit {

  requestarray:Request[] = []
  counter:any = 0

  constructor(private router:Router, private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.getData().subscribe(res => {
      var obj = JSON.stringify(res)
      var obgv2 = JSON.parse(obj)
      
      this.requestarray = Object.values(obgv2);
      console.log(this.requestarray );
      this.counter = 0
    })

  }

  seletedRequest(obj){
     // var obj = this.requestarray[index]
     var objStr = JSON.stringify(obj)
     //console.log(objStr)

     localStorage.setItem("selectedRQ",objStr)
     this.router.navigate(['/form']);
  }

}
