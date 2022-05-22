import { RentalResponseModel } from './../models/rentalResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:5001/api/Rentals/getrentaldetails';

  constructor(private httpClient:HttpClient) { }
  getRentalDetails():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
