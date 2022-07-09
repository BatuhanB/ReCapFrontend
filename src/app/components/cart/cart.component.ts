import { CarDetail } from './../../models/carDetail';
import { Car } from './../../models/car';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart = faCartShopping;
  cartItems: CartItem[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listCart();
  }

  listCart() {
    this.cartItems = this.cartService.cartList();
  }

  removeFromCart(carDetail:CarDetail){
    this.cartService.removeFromCart(carDetail);
  }
}
