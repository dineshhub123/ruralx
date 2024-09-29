import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {
  electronicItems;
  constructor(private router:Router) { 
    this.electronicItems = localStorage.getItem('displayElectronicData')

  }

  ngOnInit() {
  

  }
  imgClick(item:any){
    localStorage.setItem('cart-item',JSON.stringify(item))
    this.router.navigate(['pzoom'])
    console.log(item.product_name)
  }
}