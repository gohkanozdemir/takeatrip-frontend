import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { CarWithDetails } from '../models/carWithDetails';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'https://localhost:44383/api/cars';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByCategory(categoryId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + '/getcarsbycategoryid?id=' + categoryId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }  

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + '/getcarsbycolorid?id=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }  
  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + '/getcarsbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  } 

  getCarDetailsById(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getcardetails?id=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getbybrandid?id='+ brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getcarsdetails'
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsDetailsByCategoryId(categoryId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getcarsdetailsbycategoryid?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsDetailsByColorId(colorId: number): Observable<ListResponseModel<CarWithDetails>> {
    let newPath = this.apiUrl + '/getcarsdetailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarWithDetails>>(newPath);
  }

  getCarsDetailsByBrandId(brandId: number): Observable<ListResponseModel<CarWithDetails>> {
    let newPath = this.apiUrl + '/getcarsdetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarWithDetails>>(newPath);
  }
}
