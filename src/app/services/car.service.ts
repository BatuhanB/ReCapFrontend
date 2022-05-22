import { Observable } from 'rxjs';
import { CarResponseModel } from './../models/carResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:5001/api/Cars/getcardetails";
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
