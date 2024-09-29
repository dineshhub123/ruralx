import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map ,tap} from 'rxjs/operators';
import { environment } from '../environments/environment';
import {User, IUserResponse} from './header/user.class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers:any;
  auth:any;
  
  apiEmployeeURL:string = environment.employeeApiURL;
  apiSearchURL:string = environment.searchApiUrl;
  apiMobileURL:string = environment.mobileApiUrl;
  apiElectronicURL:string = environment.electronicApiUrl;
  apiFashionURL:string = environment.fashionApiUrl;
  apiGroceryURL:string = environment.groceryApiUrl;
  apiBestsellerURL:string = environment.bestsellerApiURL;
  apiClothURL:string = environment.clothApiUrl;
  apiTodaydealURL:string = environment.todaydealApiUrl;
  apiNewreleaseURL:string = environment.newreleaseApiUrl;
  apiCoustomerURL:string = environment.coustomerApiUrl;


  constructor(private http: HttpClient,private router:Router) { }
  
  commonHeaderFunction(){
    this.auth = '';
    if (localStorage.getItem("jwt_token") !== null) {
     this.auth = 'Bearer ' + localStorage.getItem("jwt_token");
      this.headers = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': this.auth,
       })
     };
    }
  }


  
  // employeeData(object): Observable<any> {
  //   //this.commonHeaderFunction(); 
  //   return this.http.post(this.apiURL + "user-info", object).pipe(map((res: any) => res));
  // }

  employeeData(): Observable<any> {
    return this.http.get(this.apiEmployeeURL,).pipe(map((res: any) => res)); 
  }
  searchData(object:any): Observable<any> {
    return this.http.post(this.apiSearchURL,object).pipe(map((res: any) => res));
  }
  mobileData(object:any): Observable<any> {
    return this.http.post(this.apiMobileURL,object).pipe(map((res: any) => res));
  }
  electronicData(object:any): Observable<any> {
    return this.http.post(this.apiElectronicURL,object).pipe(map((res: any) => res));
  }

  fashionData(object:any): Observable<any> {
    return this.http.post(this.apiFashionURL,object).pipe(map((res: any) => res));
  }
  groceryData(object:any): Observable<any> {
    return this.http.post(this.apiGroceryURL,object).pipe(map((res: any) => res));
  }
  bestsellerData(object:any): Observable<any> {
    return this.http.post(this.apiBestsellerURL,object).pipe(map((res: any) => res));
  }
  clothData(object:any): Observable<any> {
    return this.http.post(this.apiClothURL,object).pipe(map((res: any) => res));
  }
  todaydealData(object:any): Observable<any> {
    return this.http.post(this.apiTodaydealURL,object).pipe(map((res: any) => res));
  }
  newreleaseData(object:any): Observable<any> {
    return this.http.post(this.apiNewreleaseURL,object).pipe(map((res: any) => res));
  }
  customerData(object:any): Observable<any> {
    return this.http.post(this.apiCoustomerURL,object).pipe(map((res: any) => res));
  }
}
