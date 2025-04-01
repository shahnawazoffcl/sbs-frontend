import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    // Form Data
    name: string = '';
    bikeModel: string = '';
    contactNumber: string = '';
    fullAddress: string = '';
    date: string = '';
  
    // Available Dates for service appointment
    availableDates: Date[] = [
      new Date('2025-03-01'),
      new Date('2025-03-02'),
      new Date('2025-03-03'),
      new Date('2025-03-04')
    ];
  
    // Handle Form Submission
    onSubmit(form: NgForm) {
      if (form.valid) {
        // Simulate form submission (You can send this data to a server here)
        console.log('Form Submitted:', form.value);
  
        // Reset the form after submission
        form.reset();
  
        // Optional: Show an alert or a success message
        alert('Your booking has been successfully submitted!');
      } else {
        alert('Please fill out all the fields correctly.');
      }
    }

}
