import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private apiService:ApiService,private router:Router) { }

  ngOnInit() {
  }
  onSelectFile(ev:any){}

  uploadFormData(data:any){
    let front = data?.value?.image_front
    let array = front.split("\\");
    let image_front = array[array.length-1]

    let back = data?.value?.image_back
    let array2 = back.split("\\");
    let image_back = array2[array2.length-1]

    let side = data?.value?.image_side
    let array3 = side.split("\\");
    let image_side = array3[array3.length-1]

    let top = data?.value?.image_top
    let array4 = top.split("\\");
    let image_top = array4[array4.length-1]

    let triangle = data?.value?.image_triangle
    let array5 = triangle.split("\\");
    let image_triangle = array5[array5.length-1]


    let uploadDataPayload = {
      p_name: data?.value?.p_name,
      p_price: data?.value?.p_price,
      p_mrp: data?.value?.p_mrp,
      p_discount: data?.value?.p_discount,      
      delivery_date: data?.value?.delivery_date,
      image_front: image_front,
      image_back: image_back,
      image_side: image_side,
      image_top: image_top,
      image_triangle: image_triangle,
      p_category: data?.value?.p_name,
      p_image: image_front
    };
    this.apiService.uploadData(uploadDataPayload).subscribe((res:any) =>{
    let displaySearchData = res;
    console.log('displaySearchData',displaySearchData)

    //localStorage.setItem('displaySearchData',JSON.stringify(displaySearchData))
    //this.router.navigate(['./display-item'])    
  })

    
  }
}
