import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BikeRepair } from '../models/bikeRepair';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private isAuthenticated: boolean = false;

  private apiServerUrl = environment.apiUrl+'/service';

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
