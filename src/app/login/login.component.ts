import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(public router:Router, public loginService:LoginService ) { }

  ngOnInit() {
  }

  signup(){
  this.router.navigate(['signup'])
  }
  adminLogin(loginData:any){
    console.log('login',loginData)
     let checkLogin= this.loginService.adminLoginCheckFn(loginData.mobile,loginData.password);
     if(checkLogin==true){
       this.router.navigate(['adminpanel']);
     }
     else{
       console.log("Invalid Mobile or Password");
     }
  }
}
