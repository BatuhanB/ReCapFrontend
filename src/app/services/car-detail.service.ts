import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CarDetail } from './../models/carDetail';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  constructor(private httpClient:HttpClient,@Inject('baseUrl') private apiUrl:string) { }

  getCarDetails(carId:number):Observable<ListResponseModel<CarDetail>>{
    let currentApi = this.apiUrl + "Cars/getcardetails?id=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(currentApi);
  }
}
