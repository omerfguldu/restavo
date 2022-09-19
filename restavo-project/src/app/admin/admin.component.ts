import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  restaurantsList: any;
  categoryTypes: any;

  restaurantName: any;
  restaurantDesc: any;
  restaurantAddress: any;
  restaurantTel: any;
  restaurantRate: any;
  restaurantPrice: any;
  restaurantCategory: any;
  categoryName: any;
  categoryDesc: any;
  categoryPicture: any;

  constructor(
    private restaurantService: RestaurantsService,
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.restaurantService.getRestaurants().subscribe((data) => {
      this.restaurantsList = data;
    });

    this.categoriesService.getCategories().subscribe((data) => {
      this.categoryTypes = data;
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

  onAddNewCategory() {
    const body = {
      picture:
        this.categoryPicture ||
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpbmluZyUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      name: this.categoryName,
      description: this.categoryDesc,
    };

    this.categoriesService.addCategory(body);
    this.reloadPage();
  }

  onDelete(id) {
    this.restaurantService.deleteRestaurant(id);
    this.reloadPage();
  }

  ngOnInit(): void {}
}
