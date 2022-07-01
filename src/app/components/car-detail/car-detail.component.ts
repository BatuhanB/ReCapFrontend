import { ToastrService } from 'ngx-toastr';
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
  carDetail:CarDetail;
  carImagePaths: string = '';
  dataLoaded: boolean = false;

  carImagePath: string = 'https://localhost:5001';
  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        return this.getCarDetails(params['carId']);
      } else {
        return null;
      }
    });
  }

  getCarDetails(carId: number) {
    return this.carDetailService.getCarDetails(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.carDetail = response?.data[0];
      
      // console.log(this.carDetail.carImages[0].imagePath);
      // console.log(this.carDetail.carImages[1].imagePath);
      // console.log(this.carDetail.carImages[2].imagePath);
      // console.log(this.carDetail.carImages[3].imagePath);
      this.carImagePaths = this.carDetails[0].carImages[0]?.imagePath;
      this.carImages = this.carDetails[0]?.carImages;
      console.log(this.carDetail.carImages);
      this.dataLoaded = true;
    });
  }
  rent(car: CarDetail) {
    this.toastrService.success('Kiralandı!', car.carName);
  }
 
}
