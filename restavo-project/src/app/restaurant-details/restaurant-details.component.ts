import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  addReservation: FormGroup;
  restaurantDetails: any;
  restaurantName: any;
  reservationDate: any;
  reservationHour: any;
  reservationPeople: any;

  constructor(
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private restaurants: RestaurantsService
  ) {
    restaurants.getRestaurants().subscribe((data) => {
      this.restaurantDetails = data;
      this.restaurantDetails = this.restaurantDetails.filter((restaurant) => {
        return restaurant.id === this.restaurants.restaurantId;
      });
      this.restaurantDetails = this.restaurantDetails[0];
    });
  }
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {}

  onSubmit() {
    // this.reservationData.emit(this.addReservation.value);
    // console.log(this.reservationData);
    const body = {
      restName: this.restaurantName,
      reservationDate: this.reservationDate,
      reservationTime: this.reservationHour,
      personNum: this.reservationPeople,
    };
    // this.restDetail.postReservationData(body).subscribe((data) => {});
    this.showModal = false;
    this.showAlert = true;
  }

  showModal: boolean = false;
  showAlert: boolean = false;
}
