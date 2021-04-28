import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarWithDetails } from '../models/carWithDetails';
import { SingleResponseModel } from '../models/singleResponseModel';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = environment.apiURL;
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByCategory(categoryId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbycategoryid?id=' + categoryId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }  

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbycolorid?id=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }  
  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  } 

  getCarDetailsById(carId: number): Observable<SingleResponseModel<CarWithDetails>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbyid?id=' + carId;
    return this.httpClient.get<SingleResponseModel<CarWithDetails>>(newPath);
  }

  getCarDetailsByBrandId(brandId: number): Observable<SingleResponseModel<CarWithDetails>> {
    let newPath = this.apiUrl + 'cars/getbybrandid?id='+ brandId
    return this.httpClient.get<SingleResponseModel<CarWithDetails>>(newPath);
  }
  getCarsDetails(): Observable<ListResponseModel<CarWithDetails>> {
    let newPath = this.apiUrl + 'cars/getcarsdetails'
    return this.httpClient.get<ListResponseModel<CarWithDetails>>(newPath);
  }
  getCarsDetailsByCategoryId(categoryId: number): Observable<ListResponseModel<CarWithDetails>> {
    let newPath = this.apiUrl + 'cars/getcarsdetailsbycategoryid?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<CarWithDetails>>(newPath);
  }

  getCarsDetailsByColorId(colorId: number): Observable<ListResponseModel<CarWithDetails>> {
    let newPath = this.apiUrl + 'cars/getcarsdetailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarWithDetails>>(newPath);
  }

  getCarsDetailsByBrandId(brandId: number): Observable<ListResponseModel<CarWithDetails>> {
    let newPath = this.apiUrl + 'cars/getcarsdetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarWithDetails>>(newPath);
  }
  add(car:Car): Observable<SingleResponseModel<Car>>{
    return this.httpClient.post<SingleResponseModel<Car>>(this.apiUrl+"cars/add",car);
  }

  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/update",car);
  }

  delete(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/delete",car);
  }
}
