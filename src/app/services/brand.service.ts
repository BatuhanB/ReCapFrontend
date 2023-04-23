import { ResponseModel } from './../models/responseModel';
import { Brand } from './../models/brand';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private httpClient:HttpClient,@Inject('baseUrl') private apiUrl:string) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let url = this.apiUrl + "Brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(url);
  }

  add(brand:Brand):Observable<ResponseModel>{
    let url = this.apiUrl + "Brands/add";
    return this.httpClient.post<ResponseModel>(url,brand);
  }
}
