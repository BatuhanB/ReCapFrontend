import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './components/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CartComponent } from './components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { OperationsComponent } from './components/operations/operations.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarImageAddComponent } from './components/car-image-add/car-image-add.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarDetailComponent,
    HomeComponent,
    CarFilterPipePipe,
    FooterComponent,
    CartComponent,
    CartDetailComponent,
    BrandAddComponent,
    OperationsComponent,
    ColorAddComponent,
    CarAddComponent,
    CarImageAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FontAwesomeModule,
    CarouselModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }