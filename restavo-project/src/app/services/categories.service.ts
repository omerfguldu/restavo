import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  // url = 'http://172.16.88.73:8078/restaurant/3';
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getCategories() {
    return this.http.get(this.url);
  }
}
