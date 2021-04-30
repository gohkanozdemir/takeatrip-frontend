import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  private apiUrl = environment.apiURL;
  uploadForm: FormGroup;
  constructor(private httpClient: HttpClient) {}

  getAllImages(): Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + 'carImages/getall'
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getImagesByCarId(carId:number): Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + 'carImages/getimages?id=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  addImage(image: File, carId:number):Observable<SingleResponseModel<CarImage>>{
    let newPath = this.apiUrl + 'carImages/add?id=' + carId;
    const formData:FormData = new FormData();
    formData.append('Image',image);
    formData.append('id',carId.toString());
    return this.httpClient.post<SingleResponseModel<CarImage>>(newPath, formData, { 
      reportProgress: true,
      responseType: 'json',
    });
  }
}
