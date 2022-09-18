import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-myreservations',
  templateUrl: './myreservations.component.html',
  styleUrls: ['./myreservations.component.css'],
})
export class MyreservationsComponent implements OnInit {
  reservationList;
  constructor(
    private reservations: ReservationsService,
    private users: UsersService
  ) {
    this.reservations.getReservations().subscribe((data) => {
      this.reservationList = data;
      this.reservationList = this.reservationList.filter((reservation) => {
        return reservation.username === this.users.activeUser.username;
      });
    });
  }

  ngOnInit(): void {}
}
