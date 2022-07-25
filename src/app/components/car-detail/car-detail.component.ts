import { CartItem } from './../../models/cartItem';
import { CartService } from './../../services/cart.service';
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
  cartItems:CartItem;
  carDetail:CarDetail;
  carImagePaths: string = '';
  dataLoaded: boolean = false;

  carImagePath: string = 'https://localhost:5001';
  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService
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
      this.carImagePaths = this.carDetails[0].carImages[0]?.imagePath;
      this.carImages = this.carDetails[0]?.carImages;
      console.log(this.carDetail.carImages);
      this.dataLoaded = true;
    });
  }
  rent(car: CarDetail) {
    this.toastrService.success('Kiralandı!', car.carName);
  }
 
  addToCart(carDetail:CarDetail){
    // localStorage.setItem('cartItems',JSON.stringify(carDetail));
    // this.cartItems = localStorage.getItem(JSON.stringify(cartItems));
    this.toastrService.success("Added to the cart " , carDetail.carName+  " "+ carDetail.brandName );
    this.cartService.addToCart(carDetail);
  }
}
