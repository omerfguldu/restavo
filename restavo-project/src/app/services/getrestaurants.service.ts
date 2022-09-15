import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetrestaurantsService {
  restId = 1;
  restaurants = {
    diningRestaurants: [
      {
        id: 1,
        restaurantPicture: '../../assets/restaurants.jpg',
        name: 'Dining Rest 1',
        description: 'Dining Rest 1',
        address: 'Dining Rest 1 Address',
        rate: 5,
        averagePrice: 150,
      },
    ],
    breakfastRestaurants: [
      {
        id: 2,
        restaurantPicture: '../../assets/breakfast.jpg',
        name: 'Breakfast Rest 1',
        description: 'Breakfast Rest 1',
        address: 'Breakfast Rest 1 Address',
        rate: 5,
        averagePrice: 150,
      },
    ],
    clubs: [
      {
        id: 3,
        restaurantPicture: '../../assets/clubs.jpg',
        name: 'Nightclub 1',
        description: 'Nightclub 1',
        address: 'Nightclub 1 Address',
        rate: 1,
        averagePrice: 550,
      },
    ],
  };

  constructor(private http: HttpClient) {}

  getRestaurants() {
    switch (this.restId) {
      case 1:
        return this.restaurants['diningRestaurants'];
      case 2:
        return this.restaurants['breakfastRestaurants'];
      case 3:
        return this.restaurants['clubs'];
      default:
        return [];
    }
    // return this.http.get(
    //   `http://172.16.88.73:8078/getRestaurants/${this.restId}`
    // );
  }
}
