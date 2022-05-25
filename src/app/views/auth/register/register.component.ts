import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/user";
import {DataService} from "src/app/data.service"

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  constructor(private router:Router, private dataservice:DataService) {}
  user = new User();
  ngOnInit(): void {}

  onSubmit(){
    console.log(this.user);
    this.user.Role = "user"
     this.dataservice.registerUser(this.user).subscribe(res => {
      var obj = JSON.stringify(res)
      var obgv2 = JSON.parse(obj)
      console.log(obgv2);
      localStorage.setItem("userRole",this.user.Role)
      localStorage.setItem("useremail",this.user.email)

      if(obgv2.msg == "registerd"){
        this.router.navigate(['/admin/dashboard']);
      }

     })
   }
}
