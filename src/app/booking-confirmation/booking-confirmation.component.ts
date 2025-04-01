import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-confirmation',
  standalone: false,
  
  templateUrl: './booking-confirmation.component.html',
  styleUrl: './booking-confirmation.component.css'
})
export class BookingConfirmationComponent implements OnInit {

  bookingDetails: any;

  constructor(private bookingService: BookingService) { }

    ngOnInit(): void {
      this.bookingDetails = this.bookingService.getBookingData();
    }

}
