import { Component, OnInit ,TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { DailogComponent } from '../dailog/dailog.component';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
//import {NgbModal,NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
//import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {switchMap, debounceTime, tap, finalize} from 'rxjs/operators';
import {User, IUserResponse} from './user.class';
import {Observable} from 'rxjs'
import { ApiService } from '../api.service';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';


export interface DialogData {
  animal: string;
  name: string;

  //constructor(private dialogRef:MatDialogRef){}

}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchValue') input:any; 
    myControl = new FormControl();
  options: string[] = ['mobile','fan','t-shirt','telephone','jins','bicycle','shoes'];
  public filteredOptions:any;
  quantity:any;
  public name:any;
  public animal:any
  data=[];
  zoomId:any;
  searchName:string="";
  
  public formdata:any
  
constructor(public dialog: MatDialog,private http: HttpClient ,public router:Router,private fb:FormBuilder,private apiService:ApiService) { 
  // this.http.get("http://localhost/employee.php").subscribe(data => {
  //   this.data.push(data);

  //   }, 
  //   error => console.error(error));
  }
  get f() { return this.formdata.controls; }
  ngOnInit() {

    // this.formdata = this.fb.group({
    //   userPincode: ['', [Validators.required, Validators.maxLength(6)]],
    // });

    this.quantity=localStorage.getItem('quantity')
    if (this.quantity==null){
      this.quantity=0;
      }

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(),
        map(value => this._filter(value ||'' )),
      );
    }
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  searchDataFn(searchData:any){
    //let userData = {};
    //userData['searchData'] = searchData;
    this.apiService.searchData(searchData).subscribe(res =>{
    let displaySearchData = res;
    localStorage.setItem('displaySearchData',JSON.stringify(displaySearchData))
    this.router.navigate(['./display-item'])
    setTimeout(()=>{
      this.reloadCurrentRoute();
    },5)
    this.input.nativeElement.value='';

  })

  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

  openDialogD(): void {
    const dialogRef = this.dialog.open(DailogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    }); 
  }

  cartFun(){
    this.router.navigate(['addcart'])
  }
  searchItem(items:any){
   console.log(items.value)
  }
  keyword = 'name';
  product = [
    {
      id: 1,
      name: 'Georgia'
    },
     {
       id: 2,
       name: 'Usa'
     },
     {
       id: 3,
       name: 'England'
     }
  ];
  loginPage(){
    this.router.navigate(['login'])
  }
  admin(){
    this.router.navigate(['adminpanel'])
 
  }

  selectEvent(item:any) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  // displayFn(user: User) {
  //   if (user) { return user.name; }
  // }


}
