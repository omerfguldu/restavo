import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  restaurantsList: any;
  constructor(private restaurantService: RestaurantsService) {
    this.restaurantService.getRestaurants().subscribe((data) => {
      this.restaurantsList = data;
    });
  }

  ngOnInit(): void {}
}
