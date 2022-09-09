import { ResponseModel } from './../models/responseModel';
import { HttpClient } from '@angular/common/http';
import { CarImage } from './../models/carImage';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = "https://localhost:5001/api/";
  constructor(private hhtpClient:HttpClient) { }

  GetAllImages():Observable<ListResponseModel<CarImage>>{
    let currentApi = this.apiUrl + "CarImages/getall";
      return this.hhtpClient.get<ListResponseModel<CarImage>>(currentApi);
  }
  AddCarImages(carImage:CarImage):Observable<ResponseModel>{
    let currentApi = this.apiUrl + "CarImages/add";
    return this.hhtpClient.post<ResponseModel>(currentApi,carImage);
  }
}
