import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CategoryComponent } from './components/category/category.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { RentalComponent } from './components/rental/rental.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule } from "ngx-toastr";
import { CardetailswithimagesComponent } from './components/cardetailswithimages/cardetailswithimages.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';
import { MarkAsteriskDirective } from './directives/mark-asterisk.directive';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FileUploadDirective } from './directives/file-upload.directive';
import { CarimageAddComponent } from './components/carimage-add/carimage-add.component';
import { ProgressComponent } from './components/progress/progress.component'

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarComponent,
    CategoryComponent,
    ColorComponent,
    CustomerComponent,
    CarimageComponent,
    RentalComponent,
    FilterPipePipe,
    CardetailswithimagesComponent,
    VatAddedPipe,
    CarAddComponent,
    MarkAsteriskDirective,
    HomepageComponent,
    FileUploadDirective,
    CarimageAddComponent,
    ProgressComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
