import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }
  userNoSearchItem(searchData: any) {
    let userChipsData = {
      searchData: searchData
    };
    this.apiService.searchData(userChipsData).subscribe(res => {
      let displayMobileData = res;
      localStorage.setItem('displaySearchData', JSON.stringify(displayMobileData))
      this.router.navigate(['./display-item'])
    })
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
