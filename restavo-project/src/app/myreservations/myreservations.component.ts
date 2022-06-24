import { Component, OnInit } from '@angular/core';
import { GetreservationsService } from '../services/getreservations.service';

@Component({
  selector: 'app-myreservations',
  templateUrl: './myreservations.component.html',
  styleUrls: ['./myreservations.component.css'],
})
export class MyreservationsComponent implements OnInit {
  reservations: any;
  constructor(private reservationService: GetreservationsService) {
    reservationService.getReservations().subscribe((data) => {
      this.reservations = data;
    });
  }

  ngOnInit(): void {}
}
