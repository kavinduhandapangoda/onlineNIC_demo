import { Component, OnInit } from '@angular/core';
import {UploadFile} from "src/app/upload-file"
import { Router } from "@angular/router";
import {DataService} from "src/app/data.service"

@Component({
  selector: 'app-upd',
  templateUrl: './upd.component.html',
  styleUrls: ['./upd.component.css']
})
export class UpdComponent implements OnInit {
  selectedFile = null;

  uploadFile = new UploadFile();

  constructor(private router:Router, private dataservice:DataService) { }

  ngOnInit(): void {
  }

  onFileSelected(event){

    //var user = localStorage.getItem("userRole");
    //var obj = JSON.parse(user)
    //console.log(obj.msg);

    this.selectedFile = event.target.files[0];
    this.uploadFile.file = this.selectedFile;
    this.uploadFile.fileName = this.selectedFile.name;
    this.uploadFile.reason = "civil officer report"
    this.uploadFile.uploaded = "obj.email";
  }

  onUpload(){
    this.dataservice.uploadImage(this.uploadFile).subscribe(res => {
      console.log(res);
     })
  }

}
