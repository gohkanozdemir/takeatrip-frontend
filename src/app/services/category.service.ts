import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { CategoryResponseModel } from '../models/categoryResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:44383/api/categories/getAll';
  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<CategoryResponseModel>{
    return this.httpClient.get<CategoryResponseModel>(this.apiUrl);
  }
}