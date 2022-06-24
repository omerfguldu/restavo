import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetallrestService {
  constructor(private http: HttpClient) {}
  getRestaurants() {
    return this.http.get(`http://172.16.88.73:8078/restaurants`);
  }
}
