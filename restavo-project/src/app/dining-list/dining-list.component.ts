import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dining-list',
  templateUrl: './dining-list.component.html',
  styleUrls: ['./dining-list.component.css'],
})
export class DininglistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  restaurantsList = [
    {
      imageSrc: '../../assets/restaurants.jpg',
      name: 'ceviz ağacı',
      description: 'This is Rest 1',
    },
    {
      imageSrc: '../../assets/clubs.jpg',
      name: 'sakız ağacı',
      description: 'This is Rest 2',
    },
    {
      imageSrc: '../../assets/breakfast.jpg',
      name: 'muz ağacı',
      description: 'This is Rest 3',
    },
    {
      imageSrc: '../../assets/restaurants.jpg',
      name: 'sucuk ağacı',
      description: 'This is Rest 4',
    },
  ];
}