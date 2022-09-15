import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  // url = 'http://172.16.88.73:8078/getCategories';
  // constructor(private http: HttpClient) {}
  categories = [
    {
      categoryId: 1,
      picture: '../../assets/restaurants.jpg',
      name: 'Dining',
      description: 'Şehrin en iyi restoranlarını görüntüle',
    },
    {
      categoryId: 2,
      picture: '../../assets/breakfast.jpg',
      name: 'Breakfast',
      description: 'Şehrin en iyi kahvaltı mekanlarını görüntüle',
    },
    {
      categoryId: 3,
      picture: '../../assets/clubs.jpg',
      name: 'Nightlife and Clubs',
      description: 'Şehrin en iyi gece hayatı mekanlarını keşfedin',
    },
  ];
  getCategories() {
    return this.categories;
  }
}
