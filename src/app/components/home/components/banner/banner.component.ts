import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images = [
    'assets/images/bannner1.jpg',
    'assets/images/bannner2.jpg',
    'assets/images/bannner3.jpg'
  ];
  constructor() { 
    console.log('Antuchaaaaa....');
  }

  ngOnInit(): void {
  }

}
