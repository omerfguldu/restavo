import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  restaurantsList: any;

  restaurantName: any;
  restaurantDesc: any;
  restaurantAddress: any;
  restaurantTel: any;
  restaurantRate: any;
  restaurantPrice: any;
  restaurantCategory: any;

  constructor(
    private restaurantService: RestaurantsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.restaurantService.getRestaurants().subscribe((data) => {
      this.restaurantsList = data;
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

  onAddNewRestaurant() {
    const body = {
      categoryId: this.restaurantCategory || '1',
      name: this.restaurantName,
      picture:
        'https://b.zmtcdn.com/data/pictures/1/5915941/768d439eee9e1cf9f69fd85c7f8aa265_featured_v2.jpg?output-format=webp',
      address: this.restaurantAddress,
      description: this.restaurantDesc,
      rate: this.restaurantRate,
      averagePrice: this.restaurantPrice,
      menuPicture:
        'https://b.zmtcdn.com/data/menus/941/5915941/48a015ce2f361a7b445b96b31386f8d2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
      tel: this.restaurantTel,
    };
    this.restaurantService.addNewRestaurant(body);
    this.reloadPage();
  }

  onDelete(id) {
    this.restaurantService.deleteRestaurant(id);
    this.reloadPage();
  }

  ngOnInit(): void {}
}
