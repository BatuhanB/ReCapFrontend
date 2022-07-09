import { CarDetail } from './../models/carDetail';
import { CartItems } from './../models/cartItems';
import { Car } from './../models/car';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(carDetail: CarDetail) {
    let item = CartItems.find((x) => x.carDetail.carId === carDetail.carId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.carDetail = carDetail;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }
  removeFromCart(carDetail: CarDetail) {
    let item = CartItems.find((x) => x.carDetail.carId === carDetail.carId);
    if (item.quantity > 0) {
      item.quantity -= 1;
    }
    if (item.quantity == 0) {
      CartItems.splice(CartItems.indexOf(item), 1);
    }
  }
  cartList(): CartItem[] {
    return CartItems;
  }
}
