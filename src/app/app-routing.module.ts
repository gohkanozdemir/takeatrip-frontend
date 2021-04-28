import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CardetailswithimagesComponent } from './components/cardetailswithimages/cardetailswithimages.component';
import { CarimageAddComponent } from './components/carimage-add/carimage-add.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
