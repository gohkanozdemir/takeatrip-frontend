import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarWithDetails } from 'src/app/models/carWithDetails';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cardetailswithimages',
  templateUrl: './cardetailswithimages.component.html',
  styleUrls: ['./cardetailswithimages.component.css'],
})
export class CardetailswithimagesComponent implements OnInit {
  carDetail: CarWithDetails;
  images: CarImage[];
  imageUrl = environment.baseURL;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
        this.getCarImagesByCarId(params['carId']);
      }
    });
  }

  getCarDetails(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.carDetail = response.data;
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.images = response.data;
      console.log(JSON.stringify(response.data) )
    });
  }
  getBack() {
    this.carService.getCars();
  }
  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }
}
