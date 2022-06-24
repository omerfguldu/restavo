import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetrestaurantsService {
  restId = 1;

  constructor(private http: HttpClient) {}

  getRestaurants() {
    return this.http.get(
      `http://172.16.88.73:8078/getRestaurants/${this.restId}`
    );
  }
}
