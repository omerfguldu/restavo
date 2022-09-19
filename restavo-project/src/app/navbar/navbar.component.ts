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
  username;
  password;
  newUserUsername;
  newUserPassword;
  userType;
  isUserActive = false;
  usernameExist;
  usernamesArr;

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
  showSignUpModal: boolean = false;
  @HostListener('document:scroll')
  scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbar_variable = true;
    } else {
      this.navbar_variable = false;
    }
  }

  onUsernameChange(value) {
    this.username = value;
  }

  onPasswordChange(value) {
    this.password = value;
  }

  onNewUserUsernameChange(value) {
    this.newUserUsername = value;
  }

  onNewUserPasswordChange(value) {
    this.newUserPassword = value;
  }

  clearInputTexts() {
    this.username = '';
    this.password = '';
  }

  clearSignUpTexts() {
    this.newUserUsername = '';
    this.newUserPassword = '';
  }

  login() {
    this.userList.forEach((user) => {
      if (user.username === this.username && user.password === this.password) {
        this.loginText = 'Çıkış Yap';
        this.resText = true;
        this.userService.activeUser = user;
        this.isUserActive = true;
        this.userType = this.userService.activeUser['user_type'];
      }
    });
    this.clearInputTexts();
  }

  isUsernameExist() {
    this.usernamesArr = this.userList.map((user) => {
      return user.username;
    });
    return this.usernamesArr.includes(this.newUserUsername);
  }

  signup(event) {
    event.target.classList.add('disabled');
    this.usernameExist = this.isUsernameExist();
    if (!this.usernameExist) {
      const body = {
        username: this.newUserUsername,
        password: this.newUserPassword,
        user_type: 'user',
      };
      this.userService.addNewUser(body);
      setTimeout(() => {
        this.userService.getUsers().subscribe((data) => {
          this.userList = data;
          this.showSignUpModal = false;
          this.loginText = 'Çıkış Yap';
          this.resText = true;
          this.isUserActive = true;
          event.target.classList.remove('disabled');
          this.userList.forEach((user) => {
            if (
              user.username === this.newUserUsername &&
              user.password === this.newUserPassword
            ) {
              this.userService.activeUser = user;
              this.userType = this.userService.activeUser['user_type'];
            }
          });
          this.clearSignUpTexts();
        });
      }, 1000);
    } else {
      window.alert('username exist!!!');
    }
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
      this.isUserActive = false;
    }
  }

  onSignUp() {
    this.showSignUpModal = true;
  }

  signUpModalClose() {
    this.showSignUpModal = false;
    this.clearSignUpTexts();
  }

  loginModalClose() {
    this.showModal = false;
    this.clearInputTexts();
  }
}
