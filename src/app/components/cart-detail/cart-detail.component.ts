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
  cartItems: CarDetail[];
  carImages: CarImage[];
  carImagePath: string = 'https://localhost:5001';
  selectedCarId: number;
  totalRentPrice: number;

  constructor(
    private cartService: CartService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.CartDetailList();
  }

  CartDetailList() {
    let result = [];
    this.cartItems = this.localStorageService.getStorageItems();
    result = this.cartItems;
    this.selectedCarId = this.cartItems[0].carId;
    this.totalRentPrice = this.ListTotalPrice(result);
  }

  ListTotalPrice(items: CarDetail[]): number {
    let totalPrice = 0;
    items.forEach((x) => {
      totalPrice += x.dailyPrice;
    });
    return totalPrice;
  }
  removeFromCart(carDetail: CarDetail) {
    this.cartService.removeFromCart(carDetail);
    this.localStorageService.removeFromStorage(CartKey);
  }
}
