import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  // url = 'http://172.16.88.73:8078/getCategories';
  // constructor(private http: HttpClient) {}
  url = `https://63233633362b0d4e7ddee232.mockapi.io/categories`;
  constructor(private http: HttpClient) {}
  getCategories() {
    return this.http.get(this.url);
  }

  addCategory(newCategory) {
    return this.http.post(this.url, newCategory).subscribe();
  }
}
