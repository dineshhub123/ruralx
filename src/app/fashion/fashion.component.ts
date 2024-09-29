import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  fashionItem;
  constructor(private router: Router) {
    this.fashionItem= localStorage.getItem('displayFashionData')
  }

  ngOnInit() {
  }
  imgClick(item:any){
    localStorage.setItem('cart-item',JSON.stringify(item))
    this.router.navigate(['pzoom'])
  }
}
