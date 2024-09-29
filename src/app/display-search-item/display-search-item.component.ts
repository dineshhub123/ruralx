import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-search-item',
  templateUrl: './display-search-item.component.html',
  styleUrls: ['./display-search-item.component.css']
})
export class DisplaySearchItemComponent implements OnInit {
  public searchItem: any;
  public items:any; 
  constructor(public router:Router) { 
  this.searchItem = localStorage.getItem('displaySearchData')
    //this.searchItem=JSON.parse(localStorage.getItem('displaySearchData'))

  }

  ngOnInit() {
  
  }
  ngAfterViewInit(){

  }
  imgClick(item:any){
    localStorage.setItem('cart-item',JSON.stringify(item))
    this.router.navigate(['pzoom'])
    console.log(item.product_name)
  }
}
