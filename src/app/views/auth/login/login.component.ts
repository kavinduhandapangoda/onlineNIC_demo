import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/service/data.service";
import {User} from "src/app/user"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  user = new User();
  constructor(private dataservice:DataService,private router:Router) {}

  ngOnInit(): void {}


  onSubmit(){
    //console.log(this.user);

     this.dataservice.loginUser(this.user).subscribe(res => {
      var obj = JSON.stringify(res)
      var obgv2 = JSON.parse(obj)
      console.log(obgv2.msg);
      localStorage.setItem("userRole",obgv2.role)
      
      if(obgv2.msg == "log in"){
        this.router.navigate(['/admin/dashboard']);
      }

     

     })
   }


}
