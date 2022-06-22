import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-dining-list',
  templateUrl: './dining-list.component.html',
  styleUrls: ['./dining-list.component.css'],
})
export class DininglistComponent implements OnInit {
  private url = "http://172.16.88.73:8078/getRestaurants/1"
  li:any;
  lis=[];
  constructor(private http : HttpClient) {
    this.http.get(this.url).subscribe(Response => {
 
      // If response comes hideloader() function is called
      // to hide that loader
     
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
    })
  }
 

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