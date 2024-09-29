import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  addCartData:any;
  quantity:any;
  addPrice:any;
  addcartFlag:boolean=true;
  emptyCart:boolean=false;

  constructor(private router:Router) { }

  ngOnInit() {
    this.addCartData=localStorage.getItem('cart-item')
    this.quantity=localStorage.getItem('quantity')
    this.addPrice=this.addCartData.product_price*this.quantity;
    if (this.quantity==null){
      this.quantity=0;
      }
if (this.quantity==null||this.quantity==0){
this.addcartFlag=false;
this.emptyCart=true;
}
else{
  this.addcartFlag=true;
  this.emptyCart=false;

}

  }
  deleteCart(){
    localStorage.removeItem('quantity');
    this.addcartFlag=false;
    this.emptyCart=true;
    this.quantity=0;

  }
  addDetails(){
    this.router.navigate(['./useraddress'])
  }
}
