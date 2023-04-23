import { LocalStorageService } from './../../services/local-storage.service';
import { CarDetail } from './../../models/carDetail';
import { Car } from './../../models/car';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartKey } from 'src/app/models/localStorageKey';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart = faCartShopping;
  cartItems: CarDetail[] = [];
  totalQuantity:number = 0;
  isSave:boolean = false;
  constructor(private cartService: CartService,
    private localStorageService:LocalStorageService) {}

  ngOnInit(): void {
    this.listCart();
  }

  listCart() {
    this.cartItems = this.localStorageService.getStorageItems() ;
  }

  removeFromCart(carDetail:CarDetail){
    this.localStorageService.removeFromStorage(CartKey);
    this.cartService.removeFromCart(carDetail);
  }
}
