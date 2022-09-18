import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private http: HttpClient) {}
  getReservations() {
    return this.http.get(
      `https://63233633362b0d4e7ddee232.mockapi.io/reservations`
    );
  }

  addNewReservation(newReservation) {
    this.http
      .post(
        `https://63233633362b0d4e7ddee232.mockapi.io/reservations`,
        newReservation
      )
      .subscribe((res) => {
        console.log(res);
      });
    console.log(newReservation);
    console.log(JSON.stringify(newReservation));
  }
}
