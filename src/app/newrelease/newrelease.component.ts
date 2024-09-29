import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newrelease',
  templateUrl: './newrelease.component.html',
  styleUrls: ['./newrelease.component.css']
})
export class NewreleaseComponent implements OnInit {
  newReleaseItem
  constructor( private router:Router) { 

    this.newReleaseItem = localStorage.getItem('displayNewReleaseData')

console.log(this.newReleaseItem);

  }

  ngOnInit() {
  }
  imgClick(item:any){
    localStorage.setItem('cart-item',JSON.stringify(item))
    this.router.navigate(['pzoom'])
  }

}
