import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // This function is triggered when the form is submitted
  onSubmit(contactForm: NgForm) {
    // First, check if the form is valid
    if (contactForm.valid) {
      // Form is valid, you can now process the data
      console.log('Form Data:', contactForm.value);

      // Optionally, you can clear the form after submission
      contactForm.reset();

      // Show a success message or send the data to a server/API
      alert('Your message has been sent successfully!');
    } else {
      // If the form is not valid, you can show an error message
      alert('Please fill out all fields correctly!');
    }
  }

}
