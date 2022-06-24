import { Component, OnInit, HostListener, Host } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

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

  login() {
    this.loginText = 'Çıkış Yap';
    this.resText = true;
  }

  onLogin() {
    if (this.resText === false) {
      this.showModal = !this.showModal;
    } else {
      this.loginText = 'Giriş Yap';
      this.resText = false;
    }
  }
}
