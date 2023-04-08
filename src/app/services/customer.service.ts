import { Customer } from './../models/customer';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient:HttpClient,@Inject('baseUrl') private apiUrl:string) { }

  getCustomer():Observable<ListResponseModel<Customer>>{
    let url = this.apiUrl + 'Customers/getall'
    return this.httpClient.get<ListResponseModel<Customer>>(url);
  }
}
