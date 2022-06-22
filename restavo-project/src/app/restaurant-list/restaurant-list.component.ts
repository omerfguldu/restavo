import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  restaurantsList = [
    {
      imageSrc: '../../assets/restaurants.jpg',
      name: 'Rest 1',
      description: 'This is Rest 1',
    },
    {
      imageSrc: '../../assets/clubs.jpg',
      name: 'Rest 2',
      description: 'This is Rest 2',
    },
    {
      imageSrc: '../../assets/breakfast.jpg',
      name: 'Rest 3',
      description: 'This is Rest 3',
    },
    {
      imageSrc: '../../assets/restaurants.jpg',
      name: 'Rest 4',
      description: 'This is Rest 4',
    },
  ];
}
