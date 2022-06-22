import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit {

  constructor() { }
data : any[]=[
  {name : "omer"},
  {name : "burak"},
  {name : "mert"}
]
  ngOnInit(): void {
  }

}
