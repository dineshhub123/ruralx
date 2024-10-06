import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  public data:any;
  public retrieveResonse:any;
  public base64Data:any;
  public retrievedImage:any;
  public imageUrl = null;
  public selectedFile:any;

  constructor(private http:HttpClient,private _DomSanitizationService:DomSanitizer,public router:Router) { 

    this.http.get("http://192.168.43.205/employee.php",{ responseType: 'blob' }).subscribe((res:any) => {
      
    //console.log(res)
    this.data.push(res);
      //console.log(this.data[0][0].img_top)
      }, 
      error => console.error(error));
  
  }

  ngOnInit() {
  }

  onSelectFile(event:any){
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile)
  
    }
;
uploadFormData(){
const uploadData= new FormData();
      uploadData.append("file", this.selectedFile,this.selectedFile.name)
     this.http.post("http://localhost/uploadAdminData.php",uploadData,{
     reportProgress:true,
     observe:'events'  
     }).subscribe((res:object) => {
     this.data.push(res);
     console.log(res)
     
    
    })

  }
  notification(){
    this.router.navigate(["sell-notification"]);
  }
  upload(){
    this.router.navigate(["upload"]);
  }
  adminLogout(){
    localStorage.removeItem('adminMobile');
    this.router.navigate(["dashboard"]);

  }

}
