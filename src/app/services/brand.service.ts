import { ResponseModel } from './../models/responseModel';
import { Brand } from './../models/brand';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:5001/api/Brands/";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let url = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Brand>>(url);
  }
  add(brand:Brand):Observable<ResponseModel>{
    let url = this.apiUrl + "add";
    return this.httpClient.post<ResponseModel>(url,brand);
  }
}
