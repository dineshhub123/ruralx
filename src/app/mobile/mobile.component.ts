import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobileItem;
  constructor( private router:Router) { 
    this.mobileItem= localStorage.getItem('displayMobileData')

  }

  ngOnInit() {
  }
  imgClick(item:any){
    localStorage.setItem('cart-item',JSON.stringify(item))
    this.router.navigate(['pzoom',])
    this.router.navigate([])
  }

}
