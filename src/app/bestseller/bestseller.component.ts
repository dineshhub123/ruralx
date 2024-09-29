import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {
bestsellerItem
  constructor(private router:Router) {
    this.bestsellerItem=localStorage.getItem('displayBestsellerData')
   }

  ngOnInit() {
  }
  imgClick(item:any){
    localStorage.setItem('cart-item',JSON.stringify(item))
    this.router.navigate(['pzoom'])
  }

}
