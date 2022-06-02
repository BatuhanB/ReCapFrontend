import { CarImage } from './../../models/carImage';
import { CarDetailService } from './../../services/car-detail.service';
import { CarDetail } from './../../models/carDetail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  carImages: CarImage[];
  carImagePaths: string = '';
  dataLoaded: boolean = false;
  firstImage: CarImage[];

  carImagePath: string = 'https://localhost:5001';
  st: string = '';
  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        return this.getCarDetails(params['carId']);
      } else {
        return;
      }
    });
  }

  getCarDetails(carId: number) {
    return this.carDetailService.getCarDetails(carId).subscribe((response) => {
      this.carDetails = response.data;
      // this.carImages = this.carDetails[0].carImages;
      // console.log(response.data);
      this.carImagePaths = this.carDetails[0].carImages[0].imagePath;
      console.log(this.carDetails);
      console.log(this.carImagePaths);
      this.dataLoaded = true;
    });
  }
 
}
