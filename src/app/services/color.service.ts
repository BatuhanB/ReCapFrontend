import { ResponseModel } from './../models/responseModel';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:5001/api/Colors/';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    let currentApi = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Color>>(currentApi);
  }
  addColors(color: Color): Observable<ResponseModel> {
    let currentApi = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(currentApi, color);
  }
}
