import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-sell-notification',
  templateUrl: './sell-notification.component.html',
  styleUrls: ['./sell-notification.component.css']
})
export class SellNotificationComponent implements OnInit {
public sellItemData:any
public buyerUsername: any;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.buyProduct()
  }

  buyProduct() {
    this.apiService.getUserBuyerDetails().subscribe((Response: any) => {
     this.sellItemData = Response
     let userlistData=this.sellItemData.map((item: any) => 
     item.user_first_name)
     let removeDuplicates=new Set(userlistData)
     this.buyerUsername=[...removeDuplicates];
     console.log("userlist", this.buyerUsername.length);
    })

  }
}
