import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ReservationsService } from '../services/reservations.service';
import { RestaurantsService } from '../services/restaurants.service';
import { UsersService } from '../services/users.service';

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
    private restaurants: RestaurantsService,
    private usersService: UsersService,
    private reservationsService: ReservationsService
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
      restName: this.restaurantDetails.name,
      reservationDate: this.reservationDate,
      reservationTime: this.reservationHour,
      personNum: this.reservationPeople,
      username: this.usersService.activeUser.username,
    };
    console.log(body);
    // this.restDetail.postReservationData(body).subscribe((data) => {});
    this.reservationsService.addNewReservation(body);

    this.showModal = false;
    this.showAlert = true;
  }

  showModal: boolean = false;
  showAlert: boolean = false;
}
