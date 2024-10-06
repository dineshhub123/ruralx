import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public loginErrToast: boolean = false;
  constructor(public router: Router, public loginService: LoginService, private apiService: ApiService) { }
  pass: any
  mobile: any
  ngOnInit() {
  }

  signup() {
    this.router.navigate(['signup'])
  }
  adminLogin(loginData: any) {
    let checkAdminLogin = this.loginService.adminLoginCheckFn(loginData.mobile, loginData.password);
    if (checkAdminLogin == false) {
      this.apiService.getUserDetailsData().subscribe((res) => {
        for (let i = 0; res.length > i; i++) {
          this.pass = res[i]?.user_password;
          this.mobile = res[i]?.user_phone;
        }
        if (loginData?.mobile == this.mobile && loginData?.password == this.pass) {
          this.router.navigate(['dashboard']);
        } else {
          this.loginErrToast = true
          console.log("User Not found Please Register first then Login...!")
        }
      })
    } else {
      if (checkAdminLogin == true) {
        this.router.navigate(['adminpanel']);
      }
      else {
        console.log("Invalid Mobile or Password");
      }

    }
  }
}