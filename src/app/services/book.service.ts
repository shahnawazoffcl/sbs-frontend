import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BikeRepair } from '../models/bikeRepair';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private isAuthenticated: boolean = false;

  private apiServerUrl = 'http://localhost:8080/service';

  constructor(private http: HttpClient) {}

  public book(bikeService: BikeRepair) {
    return this.http.post<BikeRepair>(
      `${this.apiServerUrl}/book`,
      bikeService,
      {
        observe: 'response',
      }
    );
  }
}
