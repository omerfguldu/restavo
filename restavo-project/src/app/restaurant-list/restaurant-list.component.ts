import { Component, OnInit } from '@angular/core';
import { GetrestaurantsService } from '../services/getrestaurants.service';
import { RestaurantdetailsService } from '../services/restaurantdetails.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  restaurantsList: any;
  constructor(
    private restaurants: GetrestaurantsService,
    private restDetail: RestaurantdetailsService
  ) {
    // restaurants.getRestaurants().subscribe((data) => {
    //   console.warn(data);
    //   this.restaurantsList = data;
    //   console.log(this.restaurantsList[0]);
    // });
    this.restaurantsList = restaurants.getRestaurants();
  }

  ngOnInit(): void {}

  restaurantInfo(id) {
    this.restDetail.restaurantId = id;
  }
}
