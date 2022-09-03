import { ResponseModel } from './../models/responseModel';
import { Brand } from './../models/brand';
import { Color } from './../models/color';
import { CarDetail } from './../models/carDetail';
import { Car } from './../models/car';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:5001/api/';
  constructor(private httpClient: HttpClient) {}

  addCars(car: Car): Observable<ResponseModel> {
    let currentApi = this.apiUrl + 'Cars/add';
    return this.httpClient.post<ResponseModel>(currentApi, car);
  }
  getCars(): Observable<ListResponseModel<Car>> {
    let currentApi = this.apiUrl + 'Cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(currentApi);
  }
  getCarsByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let currentApi = this.apiUrl + 'Cars/getbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(currentApi);
  }
  getCarsByColorId(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let currentApi = this.apiUrl + 'Cars/getbycolorid?id=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(currentApi);
  }
  getCarDetail(): Observable<ListResponseModel<CarDetail>> {
    let currentApi = this.apiUrl + 'Cars/getcardetail';
    return this.httpClient.get<ListResponseModel<CarDetail>>(currentApi);
  }
  getCarDetails(carId: number): Observable<ListResponseModel<CarDetail>> {
    let currentApi = this.apiUrl + 'Cars/getcardetails?id=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(currentApi);
  }
  getAllColors(): Observable<ListResponseModel<Color>> {
    let currentApi = this.apiUrl + 'Colors/getall';
    return this.httpClient.get<ListResponseModel<Color>>(currentApi);
  }

  getAllBrands(): Observable<ListResponseModel<Brand>> {
    let currentApi = this.apiUrl + 'Brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(currentApi);
  }
  getCarDetailByColorIdAndBrandId(
    colorId: number,
    brandId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let currentApi =
      this.apiUrl +
      'Cars/getcoloridandbrandid?colorId=' +
      colorId +
      '&brandId=' +
      brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(currentApi);
  }
}
