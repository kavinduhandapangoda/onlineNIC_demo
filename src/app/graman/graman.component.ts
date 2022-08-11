import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {DataService} from "src/app/data.service"
import {Request} from "src/app/request"
import { AESEncryptDecryptService } from 'src/app/AESEncryptDecryptService.service'; 

@Component({
  selector: 'app-graman',
  templateUrl: './graman.component.html',
  styleUrls: ['./graman.component.css']
})
export class GramanComponent implements OnInit {

  requestarray:Request[] = []
  counter:any = 0
  userString:any = localStorage.getItem("userRole");
  constructor(private router:Router, private dataservice:DataService,public _AESEncryptDecryptService: AESEncryptDecryptService) { }

  ngOnInit(): void {

    console.log(this.userString)

    if(this.userString == "level 1 User"){
      this.dataservice.getData().subscribe(res => {
        var obj = JSON.stringify(res)
        var obgv2 = JSON.parse(obj)
        this.requestarray = Object.values(obgv2);
        console.log(this.requestarray );
        this.counter = 0
      })
    }else if(this.userString == "level 2 User"){
      this.dataservice.getDataLevel2().subscribe(res => {
        var obj = JSON.stringify(res)
        var obgv2 = JSON.parse(obj)
        this.requestarray = Object.values(obgv2);
        console.log(this.requestarray );
        this.counter = 0
      })
    }

    

  }

  seletedRequest(obj){
     var objStr = JSON.stringify(obj)
     localStorage.setItem("selectedRQ",objStr)
     this.router.navigate(['/form']);
  }

}
