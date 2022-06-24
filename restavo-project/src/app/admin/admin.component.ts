import { Component, OnInit } from '@angular/core';
import { GetrestaurantsService } from '../services/getrestaurants.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  restaurantsList: any;
  constructor(private restaurantService: GetrestaurantsService) {
    restaurantService.getRestaurants().subscribe((data) => {
      this.restaurantsList = data;
    });
  }

  ngOnInit(): void {}
}
