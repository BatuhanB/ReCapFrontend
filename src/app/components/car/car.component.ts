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
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    return this.carService.getCarDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
