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
  dataLoaded: boolean = false;
  currentCar: Car;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["brandId"]) {
         this.getCarsByBrandId(params["brandId"]);
      }else if(params["colorId"]) {
          this.getCarsByColorId(params["colorId"]);
      }
      else {
         this.getCars();
      }
    });
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  getCars() {
    return this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
     this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe((response)=>{
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
}
