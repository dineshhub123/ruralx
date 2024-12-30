import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddcartService } from '../addcart.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  addCartData: any;
  quantity: any;
  addPrice: any;
  addcartFlag: boolean = true;
  emptyCart: boolean = false;
  totalAmount: any
  unsubscribe: any;
  constructor(private router: Router, public addCartService: AddcartService) {
    this.unsubscribe = this.addCartService.getAddCartData()?.subscribe((res: any) => {
      console.log('res', res)
      this.addCartData = res
    })

  }
  ngOnInit() {
    let cartItem: any;
    cartItem = localStorage.getItem('addCartData')
    this.addCartData = JSON.parse(cartItem)
    let totalAmount = this.addCartData.map((total: any) => parseInt(total.product_price))
    this.totalAmount = totalAmount.reduce((a: any, b: any) => a + b, 0)
    this.quantity = localStorage.getItem('quantity')
    this.addPrice = this.addCartData.product_price * this.quantity;
    if (this.quantity == null) {
      this.quantity = 0;
    }
    if (this.quantity == null || this.quantity == 0) {
      this.addcartFlag = false;
      this.emptyCart = true;
    }
    else {
      this.addcartFlag = true;
      this.emptyCart = false;

    }

  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  deleteCart(deleteCart: any) {
    let deleteItem: any = {};
    deleteItem = localStorage.getItem('addCartData')
    let diTtem = JSON.parse(deleteItem)
    let index = diTtem.findIndex((x: any) => x?.id === deleteCart?.id)
    diTtem.splice(index, 1)
    localStorage.setItem('addCartData', JSON.stringify(diTtem))
    setTimeout(() => {
      this.reloadCurrentRoute();
    }, 5)
  }
  addDetails() {
    this.router.navigate(['./useraddress'])
  }
  ngOnDestroy() {
    this.unsubscribe.next()
    this.unsubscribe.complete();
  }

}
