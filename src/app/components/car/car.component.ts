import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carWithsDetails: CarDetail[] = [];
  dataLoaded = false;
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarDetailsByCardId(params['id']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.carWithsDetails = response.data;
    });
  }

  getCarDetailsByCardId(id: number) {
    this.carService.getCarDetailsById(id).subscribe((response) => {
      this.carWithsDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
