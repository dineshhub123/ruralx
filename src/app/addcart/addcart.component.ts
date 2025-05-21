import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddcartService } from '../addcart.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  addCartData:any;
  totalAmount: any
  unsubscribe: any;
  constructor(private router: Router, public addCartService: AddcartService) {
    this.unsubscribe = this.addCartService.cart$.subscribe((res: any) => {
      this.addCartData = res
    })

  }
  ngOnInit() {
    let cartItem: any;
    cartItem = localStorage.getItem('cart_items')
    this.addCartData = JSON.parse(cartItem)
    let totalAmount = this.addCartData.map((total: any) => total.product_price*total.quantity)
    this.totalAmount = totalAmount.reduce((a: any, b: any) => a + b, 0)
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  deleteCart(deleteCart: any) {
    let deleteItem: any = {};
    deleteItem = localStorage.getItem('cart_items')
    let diTtem = JSON.parse(deleteItem)
    let index = diTtem.findIndex((x: any) => x?.id === deleteCart?.id)
    diTtem.splice(index, 1)
    localStorage.setItem('cart_items', JSON.stringify(diTtem))
    this.addCartService.removeCart();
    setTimeout(() => {
      this.reloadCurrentRoute();
    }, 5)
  }
  addDetails(cartData:any) {
    console.log("cartData",cartData)
    //this.router.navigate(['./useraddress'])
  }
  ngOnDestroy() {
    this.unsubscribe.next()
    this.unsubscribe.complete();
  }

}
