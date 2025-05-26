import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-useraddress',
  templateUrl: './useraddress.component.html',
  styleUrls: ['./useraddress.component.css']
})
export class UseraddressComponent implements OnInit {
addressForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.addressForm = this.fb.group({
      fullName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      country: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      additionalNotes: ['']
    });
  }

  onSubmit() {
    if (this.addressForm.valid) {
      console.log('Delivery Address:', this.addressForm.value);
      // You can handle submission logic here
    } else {
      this.addressForm.markAllAsTouched();
    }
  }
ngOnInit() {
  }

}
