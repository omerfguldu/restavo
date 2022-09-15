import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestaurantdetailsService {
  restaurantId;
  restaurantDetails = [
    {
      id: 1,
      restaurantPicture: '../../assets/restaurants.jpg',
      name: 'Dining Rest 1',
      description: 'Dining Rest 1',
      address: 'Dining Rest 1 Address',
      rate: 5,
      averagePrice: 150,
      menuPicture: '../../assets/menu.jpg',
      tel: '+90 123 456 78 90',
    },
    {
      id: 2,
      restaurantPicture: '../../assets/breakfast.jpg',
      name: 'Breakfast Rest 1',
      description: 'Breakfast Rest 1',
      address: 'Breakfast Rest 1 Address',
      rate: 5,
      averagePrice: 150,
      menuPicture: '../../assets/menu.jpg',
      tel: '+90 123 456 78 90',
    },
    {
      id: 3,
      restaurantPicture: '../../assets/clubs.jpg',
      name: 'Nightclub 1',
      description: 'Nightclub 1',
      address: 'Nightclub 1 Address',
      rate: 1,
      averagePrice: 550,
      menuPicture: '../../assets/menu.jpg',
      tel: '+90 123 456 78 90',
    },
  ];
  constructor(private http: HttpClient) {}
  getRestaurantDetails() {
    // return this.http.get(
    //   `http://172.16.88.73:8078/restaurant/${this.restaurantId}`
    // );
    return this.restaurantDetails.filter((restaurant) => {
      return restaurant.id === this.restaurantId;
    });
  }

  // postReservationData(body: any) {
  //   return this.http.post('http://172.16.88.45:8080/orders/add', body);
  // }
}
