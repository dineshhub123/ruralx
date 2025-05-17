import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-notification',
  templateUrl: './sell-notification.component.html',
  styleUrls: ['./sell-notification.component.css']
})
export class SellNotificationComponent implements OnInit {

  constructor() { }
 public userinformation:any = [        
  // {
  // userInfo:{name:'Dinesh',email:'d@gmail.com'},buyItem:[{item:'fan',color:'black',price:1200,date:'12-04-25'},{item:'jeans',color:'blue',price:'800',date:'12-04-25'}]
  // },
  // {
  // userInfo:{name:'Ramesh',email:'ramesh@gmail.com'},buyItem:[{item:'mobile',color:'gray',price:'9000',date:'12-02-25'},{item:'mobile',color:'gray',price:'9000',date:'12-09-25'}]
  // },
  // {
  // userInfo:{name:'Dilip',email:'dilip@gmail.com'},buyItem:[{item:'mobile',color:'gray',price:'9000',date:'12-02-25'}]
  // },
  // {
  // userInfo:{name:'Raju',email:'raju@gmail.com'},buyItem:[{item:'mobile',color:'gray',price:'9000',date:'12-02-25'},{item:'mobile',color:'gray',price:'9000',date:'12-02-25'}]
  // }
]

  ngOnInit() {
  //  const userData =  this.userinformation.map(user=>user)
  //          console.log('userinformation',userData)
          
           
  }

  dataPush(){
   let data = {
      userInfo:{name:'Dinesh',email:'d@gmail.com'},
      buyItem:[{item:'fan',color:'black',price:1200,date:'12-04-25'},{item:'jeans',color:'blue',price:'800',date:'12-04-25'}]
      }
    this.userinformation.push(data)
    console.log(this.userinformation)

  }
}
