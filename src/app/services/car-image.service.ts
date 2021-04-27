import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  private apiUrl = environment.apiURL;
  constructor(private httpClient: HttpClient) {}

  getImagesByCarId(carId:number): Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + 'carImages/getimages?id=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
