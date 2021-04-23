import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarWithDetails } from 'src/app/models/carWithDetails';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetail[] = [];
  filterCar = '';
  carWithDetails: CarWithDetails[];
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByCategory(params['id']);
        this.getCarDetailsBydId(params['id']);
      } else {
        this.getCars();
        this.getCarsDetails();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByCategory(categoryId: number) {
    this.carService.getCarsByCategory(categoryId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      this.carWithDetails = this.cars.map((car, index) => ({
        id: car.id,
        carName: this.carDetails[index].carName,
        brandName: this.carDetails[index].brandName,
        colorName: this.carDetails[index].colorName,
        categoryName: this.carDetails[index].categoryName,
        modelYear: car.modelYear,
        dailyPrice: car.dailyPrice,
        description: car.description,
        brandId: car.brandId,
        colorId: car.colorId,
        categoryId: car.categoryId
      }));
    });
  }

  getCarDetailsBydId(id: number) {
    this.carService.getCarDetailsById(id).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
      // If the arrays are always ordered (code to code), you can directly zip them
      // https://stackoverflow.com/questions/52055384/merge-two-arrays-into-one-in-typescript
      this.carWithDetails = this.cars.map((car, index) => ({
        id: car.id,
        carName: this.carDetails[index].carName,
        brandName: this.carDetails[index].brandName,
        colorName: this.carDetails[index].colorName,
        categoryName: this.carDetails[index].categoryName,
        modelYear: car.modelYear,
        dailyPrice: car.dailyPrice,
        description: car.description,
        brandId: car.brandId,
        colorId: car.colorId,
        categoryId: car.categoryId
      }));
    });
  }

  // this.cars.forEach((car)=>{
  //   this.carDetails.forEach((carDetail)=>{
  //     if(car.id===carDetail.id){
  //       this.carWithsDetails.concat();

  //     }
  //   });
  // });
}
