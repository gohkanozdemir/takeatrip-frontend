import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ObjectResponseModel } from '../models/objectResponseModel';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'https://localhost:44383/api/cars';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsById(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getcardetails?id=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getbybrandid?id='+ brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
