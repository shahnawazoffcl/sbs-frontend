import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


  export class BookingService {
  private bookingData: any = null;

  constructor() { }

  setBookingData(data: any) {
    this.bookingData = data;
  }

  getBookingData() {
    return this.bookingData;
  }
}
