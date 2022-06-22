import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  categoryList = [
    {
      image_path: '../../assets/restaurants.jpg',
      category_name: 'Dining Out',
      category_text: 'Şehrin en iyi restoranlarını görüntüle',
    },
    {
      image_path: '../../assets/clubs.jpg',
      category_name: 'Nightlife and Clubs',
      category_text: 'Şehrin en iyi gece hayatı mekanlarını keşfedin',
    },
    {
      image_path: '../../assets/breakfast.jpg',
      category_name: 'Breakfast',
      category_text: 'Şehrin en iyi kahvaltı mekanları',
    },
  ];
}
