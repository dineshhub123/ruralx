import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private apiService:ApiService) { }

  ngOnInit() {
  }
  bestsellerFunc(bestsellerData:any){
    //let userData = {};
    //userData['bestsellerData'] = bestsellerData;
    this.apiService.bestsellerData(bestsellerData).subscribe(res =>{
    let displayBestsellerData = res;
    localStorage.setItem('displayBestsellerData',JSON.stringify(displayBestsellerData))
   this.router.navigate(["./bestseller"])
    })
  }
  mobileFunc(mobileData:any){
    //let userData = {};
    //userData['mobileData'] = mobileData;
    this.apiService.mobileData(mobileData).subscribe(res =>{
    let displayMobileData = res;
    localStorage.setItem('displayMobileData',JSON.stringify(displayMobileData))
    this.router.navigate(['./mobile'])
  })
  }
  
  newReleaseFunc(newreleaseData:any){
    //let userData = {};
    //userData['newreleaseData'] = newreleaseData;
    this.apiService.newreleaseData(newreleaseData).subscribe(res =>{
    let displayNewReleaseData= res;
    localStorage.setItem('displayNewReleaseData',JSON.stringify(displayNewReleaseData))
    this.router.navigate(["./newrelease"])
    })
}
  electronicFunc(electronicData:any){
    //let userData = {};
    //userData['electronicData'] = electronicData;
    this.apiService.electronicData(electronicData).subscribe(res =>{
    let displayElectronicData = res;
    localStorage.setItem('displayElectronicData',JSON.stringify(displayElectronicData))
    this.router.navigate(["./electronic"])
    })
  }
  clothFunc(clothData:any){
   // let userData = {};
    //userData['clothData'] = clothData;
    this.apiService.clothData(clothData).subscribe(res =>{
    let displayClothData = res;
    localStorage.setItem('displayClothData',JSON.stringify(displayClothData))
    this.router.navigate(["./cloth"])
    })
  }
  groceryFunc(groceryData:any){
    //let userData = {};
    //userData['groceryData'] = groceryData;
    this.apiService.groceryData(groceryData).subscribe(res =>{
    let displayGroceryData = res;
    localStorage.setItem('displayGroceryData',JSON.stringify(displayGroceryData))
    this.router.navigate(["./grocery"]) 
    })
  }
  fashionFunc(fashionData:any){
    //let userData = {};
  //userData['fashionData'] = fashionData;
  this.apiService.fashionData(fashionData).subscribe(res =>{
  let displayFashionData = res;
  localStorage.setItem('displayFashionData',JSON.stringify(displayFashionData))
  this.router.navigate(["./fashion"])

    })
  }
  customerServiceFunc(customerData:any){
    //let userData = {};
    //userData['customerData'] = customerData;
    this.apiService.customerData(customerData).subscribe(res =>{
    let displayCustomerData = res;
    localStorage.setItem('displayCustomerData',JSON.stringify(displayCustomerData))
    this.router.navigate(["./customer"])
    })
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}


}
