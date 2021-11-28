import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.cartDetails();
    this.getGrandTotal();
  }

  public products: any = [];
  cartDetails() {
    if (localStorage.getItem('localCart')) {
      this.products = JSON.parse(localStorage.getItem('localCart')!);
      console.log(this.products);
    }
  }

  public grandTotal: number = 0;
  getGrandTotal() {
    if (localStorage.getItem('localCart')) {
      this.products = JSON.parse(localStorage.getItem('localCart')!);
      this.grandTotal = this.products.reduce(function (acc: any, val: any) {
        return acc + val.quantity * val.price;
      }, 0);
    }
  }

  increaseQuantity(id: number, quantity: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i].quantity = +quantity + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.products));
    this.getGrandTotal();
  }

  decreaseQuantity(id: number, quantity: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        if (quantity != 1) this.products[i].quantity = +quantity - 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.products));
    this.getGrandTotal();
  }

  removeAll() {
    localStorage.removeItem('localCart');
    this.products = [];
    this.cartNumber = 0;
    this.auth.cartSubject.next(this.cartNumber);
  }

  singleDelete(item: any) {
    if (localStorage.getItem('localCart')) {
      this.products = JSON.parse(localStorage.getItem('localCart')!);
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === item.id) {
          this.products.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.products));
          this.getGrandTotal();
          this.getGrandTotal();
          this.cartNumberFunction();
        }
      }
    }
  }

  public cartNumber: number = 0;
  cartNumberFunction() {
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
}
