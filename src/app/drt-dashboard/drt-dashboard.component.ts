import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {DataService} from "src/app/data.service"
import { AESEncryptDecryptService } from 'src/app/AESEncryptDecryptService.service'; 

@Component({
  selector: 'app-drt-dashboard',
  templateUrl: './drt-dashboard.component.html',
  styleUrls: ['./drt-dashboard.component.css']
})
export class DrtDashboardComponent implements OnInit {

  requestarray:Request[] = []
  counter:any = 0
  userString:any = ""
  StoragePath:string = "http://nicsystem.test/uploads/"

  constructor(private router:Router, private dataservice:DataService, private _AESEncryptDecryptService: AESEncryptDecryptService) { }

  ngOnInit(): void {

    this.userString = localStorage.getItem("userRole");
    let decryptText = this._AESEncryptDecryptService.encrypt("R009");
    console.log(decryptText);

    this.dataservice.getDataLevel3().subscribe(res => {
      var obj = JSON.stringify(res)
      var obgv2 = JSON.parse(obj)
      this.requestarray = Object.values(obgv2);
      console.log(this.requestarray );
      this.counter = 0
    })

  }

  viewPoliceImages(data){
    this.dataservice.getPoliceReport(data).subscribe(res => {
      var obj = JSON.stringify(res)
      var obgv2 = JSON.parse(obj)
      var URL = this.StoragePath+obgv2.FileName;
      console.log(URL);
      //alert("view Document<br>"+this.StoragePath+obgv2.FileName);
      window.open(URL, '_blank');
      this.counter = 0
    })
  }

  viewPeaceImages(data){
    this.dataservice.getPeaceReport(data).subscribe(res => {
      var obj = JSON.stringify(res)
      var obgv2 = JSON.parse(obj)
      var URL = this.StoragePath+obgv2.FileName;
      console.log(URL);
      //alert("view Document<br>"+this.StoragePath+obgv2.FileName);
      window.open(URL, '_blank');
      this.counter = 0
    })
  }

  viewPhotoImages(data){
    this.dataservice.getPhoto(data).subscribe(res => {
      var obj = JSON.stringify(res)
      var obgv2 = JSON.parse(obj)
      var URL = this.StoragePath+obgv2.FileName;
      console.log(URL);
      //alert("view Document<br>"+this.StoragePath+obgv2.FileName);
      window.open(URL, '_blank');
      this.counter = 0
    })
  }

  seletedRequest(obj){
    var objStr = JSON.stringify(obj)
    localStorage.setItem("selectedRQ",objStr)
    this.router.navigate(['/form']);
 }

}
