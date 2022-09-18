import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  restaurantsList: any;
  constructor(private restaurants: RestaurantsService) {
    this.restaurants.getRestaurants().subscribe((data) => {
      this.restaurantsList = data;
      console.log(this.restaurantsList);

      this.restaurantsList = this.restaurantsList.filter((restaurant) => {
        return restaurant.categoryId === this.restaurants.categoryId;
      });
      console.log(this.restaurantsList);
    });
  }

  ngOnInit(): void {}

  restaurantInfo(id) {
    this.restaurants.restaurantId = id;
  }
}
