import { Component, NgZone, OnInit } from '@angular/core';
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
  constructor(public router: Router, public loginService: LoginService, private apiService: ApiService, private ngZone: NgZone) { }
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
        res.forEach((element:any) => {
        if (loginData?.mobile === element?.user_phone && loginData?.password === element?.user_password) {
          const findObject =  res.find((item:any)=>(item.user_password === loginData?.password && item?.user_phone === loginData?.mobile))
          localStorage.setItem('login_user', JSON.stringify(findObject))
          this.loginService.setUsername(findObject?.user_first_name);
          this.router.navigate(['dashboard']);
        } 
        else {
          this.loginErrToast = true
          //console.log("User Not found Please Register first then Login...!")
        }
       });
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
    reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
