import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddcartService } from '../addcart.service';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  addCartData: any;
  totalAmount: any
  unsubscribe: any;
  firstname: any;
  lastname: any;
  email: any;
  phone: any;
  pass: any;
  address: any;
  pin: any;
  constructor(private router: Router, public addCartService: AddcartService, public apiService: ApiService) {
    this.unsubscribe = this.addCartService.cart$.subscribe((res: any) => {
      this.addCartData = res
    })
    let loginUser: any = localStorage.getItem("login_user")
    let exiestUser = JSON.parse(loginUser)
    this.firstname = exiestUser?.user_first_name;
    this.lastname = exiestUser?.user_last_name;
    this.email = exiestUser?.user_email;
    this.phone = exiestUser?.user_phone;
    this.pass = exiestUser?.user_password;
    this.address = exiestUser?.user_address;
    this.pin = exiestUser?.user_pincode;
  }

  ngOnInit() {
    let cartItem: any;
    cartItem = localStorage.getItem('cart_items')
    this.addCartData = JSON.parse(cartItem)
    let totalAmount = this.addCartData.map((total: any) => total.product_price * total.quantity)
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
  addDetails(cartData: []) {
    let userBuyerArr: any = []
    cartData.forEach((item: any, index: number) => {
      const cart = {
        u_firstname: this.firstname,
        u_lastname: this.lastname,
        u_email: this.email,
        u_phone: this.phone,
        u_password: this.pass,
        u_address: this.address,
        u_pincode: this.pin,
        p_name: item?.product_name,
        p_price: item?.product_price,
        p_mrp: item?.product_mrp_price,
        p_discount: item?.product_discount,
        delivery_date: item?.delivery_date,
        image_front: item?.img_front,
        p_category: item?.category,
      }
      userBuyerArr.push(cart)
    })
    this.apiService.ProductBuyerDetails(userBuyerArr).subscribe(res => {
    })
    //this.router.navigate(['./useraddress'])

  }

  ngOnDestroy() {
    this.unsubscribe.next()
    this.unsubscribe.complete();
  }

}
