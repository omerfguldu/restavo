import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  // url = 'http://172.16.88.73:8078/restaurant/3';
  url = 'http://172.16.88.73:8078/getCategories';
  constructor(private http: HttpClient) {}
  getCategories() {
    return this.http.get(this.url);
  }
}
