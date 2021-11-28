import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './shopping-cart/header/header.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { ProductComponent } from './shopping-cart/product/product.component';

@NgModule({
  declarations: [AppComponent, ShoppingCartComponent, HeaderComponent, CartComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
