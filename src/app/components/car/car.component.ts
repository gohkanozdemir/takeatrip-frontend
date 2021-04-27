import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarWithDetails } from 'src/app/models/carWithDetails';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  filterCar = '';
  carsWithDetails: CarWithDetails[];
  carWithDetails: CarWithDetails;
  dataLoaded = false;
  currentCar:Car;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getCarsByCategory(params['categoryId']);
      } else if(params['colorId']) {
          this.getCarsDetailsByColorId(params['colorId']);
      } else if(params['brandId']) {
        this.getCarsDetailsByBrandId(params['brandId']);
    }       
      else {
        this.getCars();
      }
    });
  }
  getCarClass(car:Car){

    if(car == this.currentCar){
      return "table-info cursorPointer"
    }else{
      return "cursorPointer"
    }
  }

  setCurrentCar(car:Car){
    this.currentCar=car;
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      console.log("getCars" +JSON.stringify(response.data) )
      this.getCarsDetails();
    });
  }

  getCarsByCategory(categoryId: number) {
    this.carService.getCarsByCategory(categoryId).subscribe((response) => {
      this.cars = response.data;
      this.getCarsDetailsByCategoryId(categoryId);
    });
  }

  getCarDetailsBydId(id: number) {
    this.carService.getCarDetailsById(id).subscribe((response) => {
      this.carWithDetails = response.data;
    });
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.carsWithDetails = response.data;
      console.log("getCarsDetails" +JSON.stringify(response.data) )
      this.mergeForDetails();
    });
  }

  getCarsDetailsByCategoryId(categoryId: number) {
    this.carService.getCarsDetailsByCategoryId(categoryId).subscribe((response) => {
      this.carsWithDetails = response.data;
      this.mergeForDetails();
    });
  }

  getCarsDetailsByColorId(colorId: number) {
    this.carService.getCarsDetailsByColorId(colorId).subscribe((response) => {
      this.carsWithDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetailsByBrandId(brandId: number) {
    this.carService.getCarsDetailsByBrandId(brandId).subscribe((response) => {
      this.carsWithDetails = response.data;
      this.dataLoaded = true;
    });
  }

      // If the arrays are always ordered (code to code), you can directly zip them
      // https://stackoverflow.com/questions/52055384/merge-two-arrays-into-one-in-typescript
  private mergeForDetails(){
    this.carsWithDetails = this.cars.map((car, index) => ({
      id: car.id,
      carName: car.carName,
      brandName: this.carsWithDetails[index].brandName,
      colorName: this.carsWithDetails[index].colorName,
      categoryName: this.carsWithDetails[index].categoryName,
      modelYear: car.modelYear,
      dailyPrice: car.dailyPrice,
      description: car.description,
      brandId: car.brandId,
      colorId: car.colorId,
      categoryId: car.categoryId,
    }));
    this.dataLoaded = true;
  }
}

// this.cars.forEach((car)=>{
//   this.carDetails.forEach((carDetail)=>{
//     if(car.id===carDetail.id){
//       this.carWithsDetails.concat();

//     }
//   });
// });
