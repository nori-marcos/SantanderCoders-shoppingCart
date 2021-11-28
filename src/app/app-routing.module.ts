import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { ProductComponent } from './shopping-cart/product/product.component';

const routes: Routes = [
  {path:'', redirectTo: 'products', pathMatch:'full'},
  {path:'products', component: ProductComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
