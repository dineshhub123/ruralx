import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-useraddress',
  templateUrl: './useraddress.component.html',
  styleUrls: ['./useraddress.component.css']
})
export class UseraddressComponent implements OnInit {



  constructor(
private apiService:ApiService
  ) { }

  ngOnInit() {
    this.buyProduct()
  }


buyProduct(){
  let buyerPayload=[{
    u_firstname:'Dinesh',
    u_lastname: 'Bhagat', 
    u_email:'dineshbhagatbpl@gmail.com', 
    u_phone:'2147483647', 
    u_password:'12345', 
    u_address:'Garra', 
    u_pincode:481001,  
    p_name:'mobile', 
    p_price:'45000', 
    p_mrp:'44000', 
    p_category:'mobile', 
    p_image:'niya1_front_triangle.png', 
    p_discount:1000, 
    delivery_date:'2025-10-05', 
    image_front:'niya1_front_triangle.png', 
    image_back: 'niya1_back.png', 
    image_side:'niya1_side.jpg', 
    image_top:'niya1_top.jpg', 
    image_triangle:'niya1_triangle.png'
},
{
  u_firstname:'Dinesh',
  u_lastname: 'Bhagat', 
  u_email:'dineshbhagatbpl@gmail.com', 
  u_phone:'2147483647', 
  u_password:'12345', 
  u_address:'Garra', 
  u_pincode:481001,  
  p_name:'mobile', 
  p_price:'45000', 
  p_mrp:'44000', 
  p_category:'mobile', 
  p_image:'niya1_front_triangle.png', 
  p_discount:1000, 
  delivery_date:'2025-10-05', 
  image_front:'niya1_front_triangle.png', 
  image_back: 'niya1_back.png', 
  image_side:'niya1_side.jpg', 
  image_top:'niya1_top.jpg', 
  image_triangle:'niya1_triangle.png'
}]
this.apiService.ProductBuyerDetails (buyerPayload).subscribe(res=>{
  console.log('buyerurl', res);
})
}
}
