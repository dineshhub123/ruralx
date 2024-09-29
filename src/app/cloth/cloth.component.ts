import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {
  public clothItem : any ;

  constructor(private router:Router) { 
    this.clothItem = localStorage.getItem('displayClothData')
  }

  ngOnInit() {
  }
  imgClick(item:any){
    localStorage.setItem('cart-item',JSON.stringify(item))
    this.router.navigate(['pzoom'])
  }

}
