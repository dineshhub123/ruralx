import { Injectable } from '@angular/core';
import { BehaviorSubject ,Observable } from 'rxjs';
export interface User {
  user_first_name: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor() { 
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.userSubject.next(JSON.parse(userJson));
    }
  }

adminLoginCheckFn(mobile:any,pwd:any){
if(mobile==8600245120 && pwd=="Dinesh@1609"){
  localStorage.setItem("adminMobile",mobile);
  return true;
}
else{
  return false;
}
}

setUser(user: User): void {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

   get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }
}
