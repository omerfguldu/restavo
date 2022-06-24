import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestaurantdetailsService {
  restaurantId;
  constructor(private http: HttpClient) {}
  getRestaurantDetails() {
    return this.http.get(
      `http://172.16.88.73:8078/restaurant/${this.restaurantId}`
    );
  }

  postReservationData(body: any) {
    return this.http.post('http://172.16.88.45:8080/orders/add', body);
  }
}
