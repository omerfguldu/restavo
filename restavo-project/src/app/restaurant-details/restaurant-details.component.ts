import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantdetailsService } from '../services/restaurantdetails.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  // @Output() reservationData = new EventEmitter<{
  //   restName: string;
  //   restDate: string;
  //   restHour: string;
  //   restPeople: number;
  // }>();
  // addReservation: FormGroup;
  restaurantDetails: any;
  constructor(
    private restDetail: RestaurantdetailsService,
    private formBuilder: FormBuilder
  ) {
    restDetail.getRestaurantDetails().subscribe((data) => {
      // console.warn(data);
      this.restaurantDetails = data;
    });
  }

  ngOnInit(): void {}

  // onSubmit() {
  //   this.reservationData.emit(this.addReservation.value);
  //   console.log(this.reservationData);
  // }

  showModal: boolean = false;
}
