import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-sell-notification',
  templateUrl: './sell-notification.component.html',
  styleUrls: ['./sell-notification.component.css']
})
export class SellNotificationComponent implements OnInit {
public sellItemData:any
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.buyProduct()
  }

  buyProduct() {
    this.apiService.getUserBuyerDetails().subscribe((Response: any) => {
     this.sellItemData = Response
      console.log("buyerData", this.sellItemData)

   

    })

  }
}
