import { Component, OnInit, HostListener, Host } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userList;
  constructor(private router: Router, private userService: UsersService) {
    this.userService.getUsers().subscribe((data) => {
      this.userList = data;
      // this.restaurantsList = this.restaurantsList.filter((restaurant) => {
      //   return restaurant.categoryId === this.restaurants.categoryId;
      // });
    });
  }

  ngOnInit(): void {}
  loginText = 'Giriş Yap';
  resText = false;
  navbar_variable = false;
  showModal: boolean = false;
  @HostListener('document:scroll')
  scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbar_variable = true;
    } else {
      this.navbar_variable = false;
    }
  }
  username;
  password;
  userType;
  onUsernameChange(value) {
    this.username = value;
  }

  onPasswordChange(value) {
    this.password = value;
  }

  clearInputTexts() {
    this.username = '';
    this.password = '';
  }

  login() {
    this.userList.forEach((user) => {
      if (user.username === this.username && user.password === this.password) {
        this.loginText = 'Çıkış Yap';
        this.resText = true;
        this.userService.activeUser = user;
        this.userType = this.userService.activeUser['user_type'];
      }
    });
    this.clearInputTexts();
  }

  onLogin() {
    if (this.resText === false) {
      this.showModal = !this.showModal;
    } else {
      this.loginText = 'Giriş Yap';
      this.resText = false;
      this.router.navigateByUrl('/');
      this.userService.activeUser = {};
      this.userType = '';
    }
  }
}
