import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-useraddress',
  templateUrl: './useraddress.component.html',
  styleUrls: ['./useraddress.component.css']
})
export class UseraddressComponent implements OnInit {


  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }


}
