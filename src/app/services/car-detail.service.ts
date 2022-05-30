import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CarDetail } from './../models/carDetail';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = "https://localhost:5001/api/Cars/";
  constructor(private httpClient:HttpClient) { }

  getCarDetails(carId:number):Observable<ListResponseModel<CarDetail>>{
    let currentApi = this.apiUrl + "getcardetails?id=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(currentApi);
  }
}
