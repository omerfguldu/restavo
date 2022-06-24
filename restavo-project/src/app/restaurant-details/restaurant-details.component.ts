import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantdetailsService } from '../services/restaurantdetails.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  @Output() reservationData = new EventEmitter();
  addReservation: FormGroup;
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

  ngOnInit(): void {
    this.addReservation = this.formBuilder.group({
      restName: this.formBuilder.control('', Validators.required),
      restDate: this.formBuilder.control('', Validators.required),
      restHour: this.formBuilder.control('', Validators.required),
      restPeople: this.formBuilder.control('', Validators.required),
    });
    //if()
    this.addReservation.get('restName');
  }

  onSubmit() {
    this.reservationData.emit(this.addReservation.value);
    console.log(this.reservationData);
  }

  showModal: boolean = false;
}
