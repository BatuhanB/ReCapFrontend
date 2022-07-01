import { Color } from './../../models/color';
import { Brand } from './../../models/brand';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CarDetail } from './../../models/carDetail';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetail[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  dataLoaded: boolean = false;
  currentCar: CarDetail;
  carImagePath: string = 'https://localhost:5001';
  carPath: string = '';
  filterText = '';
  pageNumber: number = 1;
  brandFilter: number = 0;
  colorFilter: number = 0;
  clearRoute:string = "";

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getAllBrands();
      this.getAllColors();
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else if (params['carId']) {
        this.getCarDetails(params['carId']);
      } else {
        this.getCarDetail();
      }
    });
  }

  getSelectedColor(colorId: number) {
    if (this.colorFilter == colorId) return true;
    else return false;
  }
  getSelectedBrand(brandId: number) {
    if (this.brandFilter == brandId) return true;
    else return false;
  }

  setCurrentCar(car: CarDetail) {
    this.currentCar = car;
    console.log(this.currentCar);
  }

  getCars() {
    return this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetail() {
    return this.carService.getCarDetail().subscribe((response) => {
      this.carDetails = response.data;
      this.carPath = this.carDetails[0].carImages[0].imagePath;
      this.dataLoaded = true;
    });
  }

  getCarDetails(carId: number) {
    return this.carService.getCarDetails(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.carPath = this.carDetails[0].carImages[0].imagePath;
      console.log(this.carDetails);
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.carDetails = response.data;
      console.log(this.carDetails);
      this.dataLoaded = true;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getAllColors() {
    this.carService.getAllColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getAllBrands() {
    this.carService.getAllBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getCarDetailByColorIdAndBrandId(colorId: number, brandId: number) {
    this.carService
      .getCarDetailByColorIdAndBrandId(colorId, brandId)
      .subscribe((response) => {
        this.carDetails = response.data;
      });
  }
  changeRouteLink(){
    let route:string;
    if (this.brandFilter && this.colorFilter) {
      route = "cars/brand/" + this.brandFilter + "/color/" + this.colorFilter
    }else if(this.colorFilter){
      route = "cars/color/" + this.colorFilter
    }else if(this.brandFilter){
      route = "cars/brand/" + this.brandFilter
    }else{
      route = "cars"
    }
    console.log(route);
    return this.router.navigateByUrl(route);
  }
}
