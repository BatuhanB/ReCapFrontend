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
  currentCar:Car;
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  setCurrentCar(car:Car){
    this.currentCar = car;
  }

  getCars() {
    return this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

}