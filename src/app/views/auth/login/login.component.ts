import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/user";
import {DataService} from "src/app/data.service"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor(private router:Router, private dataservice:DataService) {}

  roleName: string;

  ngOnInit(): void {
    this.roleName = 'gn'
    // this.roleName = 'ds'
    // this.roleName = 'drp'
  }

  onSubmit(){
    //console.log(this.user);

     this.dataservice.loginUser(this.user).subscribe(res => {
      var obj = JSON.stringify(res)
      var obgv2 = JSON.parse(obj)
      console.log(obgv2.msg);
      localStorage.setItem("userRole",obgv2)

      if(obgv2.msg == "log in"){
        this.router.navigate(['/admin/dashboard']);
      }
     })
   }
  

}
