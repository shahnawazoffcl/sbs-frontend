import { Component } from '@angular/core';
import { FormBuilder, NgForm, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BikeRepair } from '../models/bikeRepair';
import { BookService } from '../services/book.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-booking-form',
  standalone: false,
  
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {
  bikeModel: string = '';
  serviceType: string = '';
  preferredTime: string = '';
  Name: string = '';
  Contact: number = 0;
  FullAddress: string = '';
  showMessage: boolean = false;  // Variable to control the message visibility
 availableDates: Date[] = [];
  date: any;
  form: any;
  Form: any;
  bikeRepair: BikeRepair = {address:'', name:'', bikeModel:'', preferredTime:'', contactNo:''};

  constructor(private router:Router,private fb: FormBuilder,private bookService:BookService, private toastr:ToastrService) {
    // Set min and max date for the current week
    const today = new Date();

    this.Form = this.fb.group({
      
      date: ['', Validators.required]  // Date field with required validator
    });
  
   this.generateNextSevenDaysExcludingThursdays();
  }

  generateNextSevenDaysExcludingThursdays() {
    let currentDate = new Date();
    let daysCount = 0;

    while (this.availableDates.length < 15) {
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
      

      // Check if the day is not Thursday (3 = Thursday)
      if (currentDate.getDay() !== 4) {
        this.availableDates.push(new Date(currentDate));
      }
    }
  }

  
  

  // Handle form submission
  onSubmit(form:NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      this.bikeRepair.address = form.value.address;
      this.bikeRepair.bikeModel = form.value.bikeModel
      this.bikeRepair.contactNo = form.value.contactNumber;
      this.bikeRepair.name = form.value.name;
      this.bikeRepair.preferredTime = form.value.date;
      console.log("bike reapir obj: ",this.bikeRepair);
      this.bookService.book(this.bikeRepair).subscribe(
        (response) =>{
          this.toastr.success("Service Booked.")
          this.router.navigate(['/confirmation']);
        },
        (error)=>{
          this.toastr.error("Some error occurred please try again!!!")
          console.log(error);
          
        }
      )
    
    } else {
      console.log('Form is not valid');
      this.showMessage = true; // Show the message if the form is invalid
    }
  }
}
