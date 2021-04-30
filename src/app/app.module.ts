import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AppRoutingModule } from './app-routing.module';
import {ToastrModule } from "ngx-toastr";

import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brands/brand/brand.component';
import { BrandAddComponent } from './components/brands/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brands/brand-update/brand-update.component';
import { BrandDeleteComponent } from './components/brands/brand-delete/brand-delete.component'
import { CarComponent } from './components/cars/car/car.component';
import { CarAddComponent } from './components/cars/car-add/car-add.component';
import { CarDeleteComponent } from './components/cars/car-delete/car-delete.component';
import { CarUpdateComponent } from './components/cars/car-update/car-update.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { CategoryAddComponent } from './components/categories/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/categories/category-update/category-update.component';
import { CategoryDeleteComponent } from './components/categories/category-delete/category-delete.component';
import { ColorComponent } from './components/colors/color/color.component';
import { ColorAddComponent } from './components/colors/color-add/color-add.component';
import { ColorUpdateComponent } from './components/colors/color-update/color-update.component';
import { ColorDeleteComponent } from './components/colors/color-delete/color-delete.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CarimageComponent } from './components/carimages/carimage/carimage.component';
import { CarimageAddComponent } from './components/carimages/carimage-add/carimage-add.component';
import { RentalComponent } from './components/rentals/rental/rental.component';
import { CardetailswithimagesComponent } from './components/cars/cardetailswithimages/cardetailswithimages.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProgressComponent } from './components/carimages/progress/progress.component';

import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';

import { MarkAsteriskDirective } from './directives/mark-asterisk.directive';
import { FileUploadDirective } from './directives/file-upload.directive';
import { MaterialElevationDirective } from './directives/material-elevation.directive';

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
    ProgressComponent,
    CarUpdateComponent,
    CarDeleteComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    ColorDeleteComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    BrandDeleteComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    CategoryDeleteComponent,
    MaterialElevationDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
