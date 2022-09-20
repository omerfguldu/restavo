import { Component, OnInit, HostListener, Host } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';
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
  searchInput;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,
    private restaurantsService: RestaurantsService
  ) {
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
  hamburgerMenu;
  @HostListener('document:scroll')
  scrollFunction() {
    this.hamburgerMenu = document.querySelectorAll('.line');
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbar_variable = true;
      this.hamburgerMenu.forEach((line) => {
        line.style.backgroundColor = '#000';
      });
    } else {
      this.navbar_variable = false;
      this.hamburgerMenu.forEach((line) => {
        line.style.backgroundColor = '#fff';
      });
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
      this.userService.activeUser = undefined;
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

  onSearch() {
    this.router.navigateByUrl('/results');
    this.restaurantsService.reloadResultsPage = true;
    this.searchInput = '';
  }

  onSearchInputChange(value) {
    this.searchInput = value;
    this.restaurantsService.searchKeyword = this.searchInput;
  }
}
