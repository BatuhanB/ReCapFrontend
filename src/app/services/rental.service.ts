import { Rental } from './../models/rental';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  constructor(private httpClient:HttpClient,@Inject('baseUrl') private apiUrl:string) { }

  
  getRentalDetails():Observable<ListResponseModel<Rental>>{
    let url = this.apiUrl + 'Rentals/getrentaldetails';
    return this.httpClient.get<ListResponseModel<Rental>>(url);
  }
}
