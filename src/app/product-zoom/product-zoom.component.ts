import { Component, OnInit,Inject,} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {ActivatedRoute } from '@angular/router';
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DailogComponent } from '../dailog/dailog.component';
import { MatDialog } from '@angular/material/dialog'; 
import { DOCUMENT } from '@angular/common';
import { AddcartService } from '../addcart.service';
@Component({
  selector: 'app-product-zoom',
  templateUrl: './product-zoom.component.html',
  styleUrls: ['./product-zoom.component.css']
})
export class ProductZoomComponent implements OnInit{
  public showModal: boolean = false;
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    this.document.body.classList.add('no-scroll');

  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
    this.document.body.classList.remove('no-scroll');

  }

public data:any;
res:any;
public zoomId:any;
public child:any=true;
public childImg:any;
public childImgTop:any;
public childImgSide:any;
public childImgBack:any;
public childImgFront:any;
public childImgFrontTri:any;
public searchName:string="";
public quantity:any;
public name:any;
public animal:any;
public cartItem:any
public counter : number = 1;
    
increment(){
  this.counter += 1;
}

decrement(){
  this.counter -= 1;
}


  enableZoom: Boolean = true;
  previewImageSrc="";
  zoomImageSrc="assets/img/niya1.png";
    constructor(private http: HttpClient,
    private router:Router,
    private route:ActivatedRoute,
    public dialog: MatDialog,
    public addCartService:AddcartService,
    @Inject(DOCUMENT) private document: Document,
      ){
      let itemZoom:any;
      itemZoom = localStorage.getItem('cart-item')
      this.cartItem = JSON.parse(itemZoom)
    // this.http.get("http://localhost/employee.php").subscribe(data => {
    // this.data.push(data);
    // }, 
    // error => console.error(error));

  }
  openDialog_(): void {
    const dialogRef = this.dialog.open(DailogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }
  getCart:any = []
ngOnInit(){
  // console.log(this.route.snapshot.params)
  //this.res=this.route.snapshot.params.id-1
  this.quantity = localStorage.getItem('quantity')
  if (this.quantity==null){
    this.quantity=0;
    }
    else{
      this.quantity=this.quantity;
    }
  
}
ChildMasterDisplay(master:any){
  this.cartItem.product_img = master ;
  
}
ChildTopDisplay(top:any){
  this.cartItem.product_img=top;

}
ChildSideDisplay(side:any){
  this.cartItem.product_img=side;

}
ChildBackDisplay(back:any){
  this.cartItem.product_img=back;

  }
  ChildTriangleDisplay(triangle:any){
  this.cartItem.product_img=triangle;

  }
ChildFrontDisplay(front:any){
  this.cartItem.product_img=front;

  }
  addCartItem:any = []
 

  addCart(cartData:any){
    this.addCartService.setAddCartData(cartData);
    let getStoreCart:any = {};
    getStoreCart = localStorage.getItem("addCartData")
    this.addCartItem = getStoreCart?JSON.parse(getStoreCart):[]
    this.addCartItem.push(cartData)
    localStorage.setItem('addCartData',JSON.stringify(this.addCartItem));
    localStorage.setItem('quantity',JSON.stringify(this.counter));
    this.router.navigate(['./addcart']);
  }
  addDetails(){
    this.router.navigate(['./useraddress'])
  }

}

 