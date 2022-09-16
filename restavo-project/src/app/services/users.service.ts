import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = `https://63233633362b0d4e7ddee232.mockapi.io/users`;

  activeUser;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url);
  }
}
