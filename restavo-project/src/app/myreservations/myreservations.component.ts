import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private users: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.reservations.getReservations().subscribe((data) => {
      this.reservationList = data;
      this.reservationList = this.reservationList.filter((reservation) => {
        return reservation.username === this.users.activeUser.username;
      });
    });
  }

  reloadPage() {
    setTimeout(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./'], {
        relativeTo: this.route,
      });
    }, 1000);
  }

  onCancelReservation = (id) => {
    this.reservations.cancelReservation(id);
    this.reloadPage();
  };

  ngOnInit(): void {}
}
