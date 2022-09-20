import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  url = `https://63233633362b0d4e7ddee232.mockapi.io/restaurants`;
  constructor(private http: HttpClient) {}

  categoryId;
  restaurantId;
  searchKeyword = '';
  reloadResultsPage = false;

  getRestaurants() {
    return this.http.get(this.url);
  }

  addNewRestaurant(newRest) {
    this.http.post(this.url, newRest).subscribe();
  }

  deleteRestaurant(id) {
    this.http.delete(`${this.url}/${id}`).subscribe();
  }
}
