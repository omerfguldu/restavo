import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { GetrestaurantsService } from '../services/getrestaurants.service';
import { RestaurantdetailsService } from '../services/restaurantdetails.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  // @Output() reservationData = new EventEmitter();
  addReservation: FormGroup;
  restaurantDetails: any;
  restaurantName: any;
  reservationDate: any;
  reservationHour: any;
  reservationPeople: any;

  constructor(
    private restDetail: RestaurantdetailsService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private restaurantDetail: RestaurantdetailsService
  ) {
    // restDetail.getRestaurantDetails().subscribe((data) => {
    //   // console.warn(data);
    //   this.restaurantDetails = data;
    // });
    this.restaurantDetails = this.restaurantDetail.getRestaurantDetails()[0];
  }
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
    // this.addReservation = this.formBuilder.group({
    //   restName: this.formBuilder.control('', Validators.required),
    //   restDate: this.formBuilder.control('', Validators.required),
    //   restHour: this.formBuilder.control('', Validators.required),
    //   restPeople: this.formBuilder.control('', Validators.required),
    // });
    // //if()
    // this.addReservation.get('restName');
  }

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
