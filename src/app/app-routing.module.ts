import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './componenets/cart/cart.component';
import { ConfirmationComponent } from './componenets/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './componenets/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './componenets/product-list/product-list.component';

const routes: Routes = [
  {path: "", component: ProductListComponent},
  {path: "products/:id", component: ProductItemDetailComponent},
  {path: "cart", component: CartComponent},
  {path: "confirmation", component: ConfirmationComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
