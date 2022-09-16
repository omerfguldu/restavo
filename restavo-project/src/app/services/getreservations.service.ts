import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetreservationsService {
  constructor(private http: HttpClient) {}
  getReservations() {
    return this.http.get(`http://172.16.88.45:8080/orders/get`);
  }
}
