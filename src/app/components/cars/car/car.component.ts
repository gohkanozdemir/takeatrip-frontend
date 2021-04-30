import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarWithDetails } from 'src/app/models/carWithDetails';
import { ListCarsImages } from 'src/app/models/listCarsImages';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

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
  selectedCar: Car;
  gridColumns = 2;
  imageUrl = environment.baseURL;
  carsImages: ListCarsImages[] = [];
  carImages: CarImage;
  imageDefault: string;
  srcPath: string;

  constructor(
    private carService: CarService,
    private imageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getCarsByCategory(params['categoryId']);
      } else if (params['colorId']) {
        this.getCarsDetailsByColorId(params['colorId']);
      } else if (params['brandId']) {
        this.getCarsDetailsByBrandId(params['brandId']);
      } else {
        this.getCars();
      }
    });
  }

  setCurrentCar(car: Car) {
    this.selectedCar = car;
  }

  getCarsImages(id: number, index: number) {
    this.imageService.getImagesByCarId(id).subscribe((response) => {
      this.carsImages[index] = {
        carId: id,
        images: response.data,
      };
    });
  }

  getCars() {
    this.dataLoaded = false;
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      let i = 0;
      this.cars.forEach((car) => {
        this.getCarsImages(car.id, i++);
      });
      this.getCarsDetails();
    });
  }

  getCarImages(car: Car): string {
    var result = this.carsImages.find((c) => c.carId == car.id);
    this.imageDefault = result.images[0].imagePath;
    this.srcPath = this.imageUrl + '/' + this.imageDefault;
    return this.srcPath;
  }

  getCarsByCategory(categoryId: number) {
    this.dataLoaded = false;
    this.carService.getCarsByCategory(categoryId).subscribe((response) => {
      this.cars = response.data;
      let i = 0;
      this.cars.forEach((cw) => {
        this.getCarsImages(cw.id, i++);
      });
      this.getCarsDetailsByCategoryId(categoryId);
    });
  }

  getCarDetailsBydId(id: number) {
    this.carService.getCarDetailsById(id).subscribe((response) => {
      this.carWithDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.carsWithDetails = response.data;
      this.dataLoaded = true;
      //console.log("getCarsDetails" +JSON.stringify(response.data) )
      //this.mergeForDetails();
    });
  }

  getCarsDetailsByCategoryId(categoryId: number) {
    this.carService
      .getCarsDetailsByCategoryId(categoryId)
      .subscribe((response) => {
        this.carsWithDetails = response.data;
        this.dataLoaded = true;
      });
  }

  getCarsDetailsByColorId(colorId: number) {
    this.dataLoaded = false;
    let i = 0;
    this.carService.getCarsDetailsByColorId(colorId).subscribe((response) => {
      this.carsWithDetails = response.data;
      this.carsWithDetails.forEach((cw) => {
        this.getCarsImages(cw.id, i++);
      });
    });
    // const observable = new Observable((subscriber) => {
    //   subscriber.next(
    //     this.carService
    //       .getCarsDetailsByColorId(colorId)
    //       .subscribe((response) => {
    //         this.carsWithDetails = response.data;
    //       })
    //   );
    //   setTimeout(() => {
    //     subscriber.next(
    //       this.carsWithDetails.forEach(cw=>{
    //         console.log(this.carsWithDetails[i])
    //         this.getCarsImages(this.carsWithDetails[i++].id, i)
    //       })
    //     );
    //     subscriber.complete();
    //   }, 1000);
    // });
    // observable.subscribe({
    //   next(x) {
    //   },
    //   error(err) {
    //     console.error('something wrong occurred: ' + err);
    //   },
    //   complete() {
    //   },
    // });
    this.dataLoaded = true;
  }

  getCarsDetailsByBrandId(brandId: number) {
    this.dataLoaded = false;
    this.carService.getCarsDetailsByBrandId(brandId).subscribe((response) => {
      this.carsWithDetails = response.data;
      let i = 0;
      this.carsWithDetails.forEach((cw) => {
        this.getCarsImages(cw.id, i++);
      });
      this.dataLoaded = true;
    });
  }

  // If the arrays are always ordered (code to code), you can directly zip them
  // https://stackoverflow.com/questions/52055384/merge-two-arrays-into-one-in-typescript
  private mergeForDetails() {
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

// class="img-thumbnail rounded mx-auto d-block"
