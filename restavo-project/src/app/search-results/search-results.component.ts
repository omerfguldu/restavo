import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  restaurantsList: any;
  showMessage = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantsService
  ) {
    this.restaurantService.getRestaurants().subscribe((data) => {
      this.restaurantsList = data;
      this.restaurantsList = this.restaurantsList.filter((rest) => {
        return rest.name.includes(this.restaurantService.searchKeyword);
      });
      this.showMessage = this.restaurantsList.length > 0 ? false : true;
    });
  }

  restaurantInfo(id) {
    this.restaurantService.restaurantId = id;
  }

  reloadPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route,
    });
    this.restaurantService.reloadResultsPage = false;
  }

  ngOnInit(): void {
    if (this.restaurantService.reloadResultsPage === true) {
      this.reloadPage();
    }
  }
}
