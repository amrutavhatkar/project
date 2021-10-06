import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

import { SliderComponent } from './slider/slider.component';
import { SlotbookingComponent } from './slotbooking/slotbooking.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'menu', component: ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'bookslot',component:SlotbookingComponent},
  {path:'payment',component:PaymentComponent},
  {path:'', component: SliderComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
