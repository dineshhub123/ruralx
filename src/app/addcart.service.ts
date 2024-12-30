import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {
  private addCartSubject = new BehaviorSubject<any>([]);
  addCartData = this.addCartSubject.asObservable();


  getAddCartData() {
    try {
      return this.addCartData
    } catch (error) {
    }
  }

  setAddCartData(data: any) {
    try {
      this.addCartSubject.next(data);
    } catch (error) {

    }
  }


}
