import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brands/brand-add/brand-add.component';
import { CarAddComponent } from './components/cars/car-add/car-add.component';
import { CarComponent } from './components/cars/car/car.component';
import { CardetailswithimagesComponent } from './components/cars/cardetailswithimages/cardetailswithimages.component';
import { CarimageAddComponent } from './components/carimages/carimage-add/carimage-add.component';
import { CategoryAddComponent } from './components/categories/category-add/category-add.component';
import { ColorAddComponent } from './components/colors/color-add/color-add.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  //{ path: '', component: CarComponent },
  { path:"",pathMatch:"full",component:HomepageComponent},
 // { path:"",pathMatch:"full",component:CarComponent},
  { path: 'cars', component: CarComponent },
  { path: 'cars/category/:categoryId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/details/:carId', component: CardetailswithimagesComponent },
  { path: 'cars/add', component: CarAddComponent },
  { path: 'image/add', component: CarimageAddComponent },
  { path: 'colors/add', component: ColorAddComponent },
  { path: 'brands/add', component: BrandAddComponent },
  { path: 'categories/add', component: CategoryAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
