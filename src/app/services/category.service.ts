import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.apiURL;
  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ListResponseModel<Category>>{
    let newPath = this.apiUrl + 'categories/getAll'
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
  add(category:Category): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"categories/add",category);
  }

  update(category:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"categories/update",category);
  }

  delete(category:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"categories/delete",category);
  }
}
