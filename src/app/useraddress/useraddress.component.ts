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
    p_price:'40000', 
    p_mrp:'44000', 
    p_discount:'4000', 
    delivery_date:'2025/10/05', 
    image_front:'niya1_top.jpg', 
    p_category:'mobile', 
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
    p_price:'40000', 
    p_mrp:'44000', 
    p_discount:'4000', 
    delivery_date:'2025/10/05', 
    image_front:'niya1_top.jpg', 
    p_category:'mobile', 
},
{
    u_firstname:'Ramesh',
    u_lastname: 'Patle', 
    u_email:'rameshpatle@gmail.com', 
    u_phone:'2147483647', 
    u_password:'123', 
    u_address:'Bgt', 
    u_pincode:481331,  
    p_name:'fan', 
    p_price:'6000', 
    p_mrp:'6300', 
    p_discount:'300', 
    delivery_date:'2025/10/05', 
    image_front:'niya1_top.jpg', 
    p_category:'fan', 
},
{
    u_firstname:'Sunil',
    u_lastname: 'Bisen', 
    u_email:'sunilbisen@gmail.com', 
    u_phone:'9863720541', 
    u_password:'@123', 
    u_address:'Bpl', 
    u_pincode:462031,  
    p_name:'t-shirt', 
    p_price:'850', 
    p_mrp:'1200', 
    p_discount:'350', 
    delivery_date:'2025/10/20', 
    image_front:'niya1_top.jpg', 
    p_category:'t-shirt', 
}

]
this.apiService.ProductBuyerDetails(buyerPayload).subscribe(res=>{
  console.log('buyerurl', res);
})
}
}
