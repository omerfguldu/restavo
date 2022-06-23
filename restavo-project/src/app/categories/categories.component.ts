import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { GetrestaurantsService } from '../services/getrestaurants.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any;
  constructor(
    private categoryData: CategoriesService,
    private restaurants: GetrestaurantsService
  ) {
    categoryData.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  ngOnInit(): void {}

  selectCategoryId(categoryId) {
    this.restaurants.restId = categoryId;
  }
}
