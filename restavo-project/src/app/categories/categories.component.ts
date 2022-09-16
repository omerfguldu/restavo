import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any;
  constructor(
    private categoryData: CategoriesService,
    private restaurants: RestaurantsService
  ) {
    categoryData.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  ngOnInit(): void {}

  selectCategoryId(categoryId) {
    this.restaurants.categoryId = categoryId;
  }
}
