import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedTab: string = 'Loved'
  tabList: Array<{ id: number; name: string }> = [
    {
      id: 1,
      name: 'Crafted',
    },
    {
      id: 2,
      name: 'Trusted',
    },
    {
      id: 3,
      name: 'Loved',
    },
  ];
  constructor() {}

  ngOnInit() {}
  tabClick(tab:string){
    this.selectedTab = tab;
  }
}
