import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-search-item',
  templateUrl: './display-search-item.component.html',
  styleUrls: ['./display-search-item.component.css']
})
export class DisplaySearchItemComponent implements OnInit {
  public searchItem:any;
  public items:any; 
  constructor(public router:Router) { 

  }

  ngOnInit() {
    this.itemInitilize();
  }
  itemInitilize(){
    let data:any;
    console.log(data, 'data');
    data = localStorage.getItem('displaySearchData')
    this.searchItem = JSON.parse(data)
    console.log(this.searchItem, 'this.searchItem');
  }
  ngAfterViewInit(){

  }
  imgClick(item:any){
    localStorage.setItem('cart-item',JSON.stringify(item))
    this.router.navigate(['pzoom'])
  }
}
