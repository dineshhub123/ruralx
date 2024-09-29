import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

adminLoginCheckFn(mobile:any,pwd:any){
if(mobile==8600245120 && pwd=="Dinesh@1609"){
  localStorage.setItem("adminMobile",mobile);
  return true;
}
else{
  return false;
}
}
}
