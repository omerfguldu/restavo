import { Component, OnInit } from '@angular/core';
import { RestaurantdetailsService } from '../services/restaurantdetails.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantDetails: any;
  constructor(private restDetail: RestaurantdetailsService) {
    restDetail.getRestaurantDetails().subscribe((data) => {
      // console.warn(data);
      this.restaurantDetails = data;
    });
  }

  ngOnInit(): void {}

  showModal: boolean = false;
}
