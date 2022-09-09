import { CarImageAddComponent } from './components/car-image-add/car-image-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { OperationsComponent } from './components/operations/operations.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { HomeComponent } from './components/home/home.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"cars",component:CarComponent},
  {path:"cartDetail",component:CartDetailComponent},
  {path:"cars/carDetails/:carId",component:CarDetailComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"brands",component:BrandComponent},
  {path:"rentals",component:RentalComponent},
  {path:"colors",component:ColorComponent},
  {path:"customers",component:CustomerComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"cars/add",component:CarAddComponent},
  {path:"carImages/add",component:CarImageAddComponent},
  {path:"operations",component:OperationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
