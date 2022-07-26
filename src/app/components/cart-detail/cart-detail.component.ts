import { CartKey } from './../../models/localStorageKey';
import { CarDetail } from './../../models/carDetail';
import { LocalStorageService } from './../../services/local-storage.service';
import { CarDetailService } from './../../services/car-detail.service';
import { CarImage } from './../../models/carImage';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cartItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
})
export class CartDetailComponent implements OnInit {
  cartItems: CartItem[];
  carImages: CarImage[];
  carImagePath: string = 'https://localhost:5001';
  selectedCarId:number;
  totalRentPrice:number;
  
  constructor(
    private cartService: CartService,
    private localStorageService:LocalStorageService
  ) {}

  ngOnInit(): void {
    this.CartDetailList();
  }

  CartDetailList() {
    this.cartItems = this.cartService.cartList();
    this.selectedCarId = this.cartItems[0].carDetail.carId;
    let checkIfExist = this.localStorageService.getStorage(CartKey);
    console.log(checkIfExist)
  }

  ListTotalPrice(){
    return this.cartItems[0].carDetail.dailyPrice
  }
  removeFromCart(carDetail:CarDetail){
    this.cartService.removeFromCart(carDetail);
    this.localStorageService.removeFromStorage(CartKey)
  }
}