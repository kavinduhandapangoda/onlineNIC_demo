import { Component, OnInit } from "@angular/core";
import { Request } from 'src/app/request'
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit {
  //request:any;
  request = new Request();
 

  constructor(private dataservice:DataService) {}

  ngOnInit(): void {}


  

  onSubmit(){
     // console.log(this.request

      this.dataservice.insertData(this.request).subscribe(res => {
        console.log(res);
      })
    }

}
