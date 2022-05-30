import { Car } from './../models/car';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  apiUrl = "https://localhost:5001/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let currentApi = this.apiUrl + "Cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(currentApi);
  }
}