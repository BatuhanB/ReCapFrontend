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
  dataLoaded: boolean = false;
  currentCar: CarDetail;
  carImagePath: string = 'https://localhost:5001';
  carPath:string = "";
  filterText = "";
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      }else if (params['carId']){
        this.getCarDetails(params['carId'])
      } else {
        this.getCarDetail();
      }
    });
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

  getCarDetail(){
    return this.carService.getCarDetail().subscribe((response)=>{
      this.carDetails = response.data;
      this.carPath = this.carDetails[0].carImages[0].imagePath;
      this.dataLoaded = true;
    })
  }

  getCarDetails(carId:number){
    return this.carService.getCarDetails(carId).subscribe((response)=>{
      this.carDetails = response.data;
      this.carPath = this.carDetails[0].carImages[0].imagePath;
      console.log(this.carDetails);
      this.dataLoaded = true;
    })
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
}
