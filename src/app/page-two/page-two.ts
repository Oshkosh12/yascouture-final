import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Footer } from '../footer/footer';
import { Silder } from '../silder/silder';
import { Sidebartwo } from '../sidebartwo/sidebartwo';
import { Slidertwo } from '../slidertwo/slidertwo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-two',
  imports: [MainPage, Footer, Slidertwo],
  templateUrl: './page-two.html',
  styleUrl: './page-two.scss',
})
export class PageTwo {
  constructor(private route: Router) {}
  images = [
    'assets/j11.webp',
    'assets/newBridalImages/3C8A1469.jpg',
    'assets/newBridalImages/3C8A1582.jpg',
    // 'assets/j14.webp',
    'assets/3C8A1513-scaled-1-1.jpg.webp',
  ];
  images2 = [
    'assets/j11.webp',
    'assets/newBridalImages/3C8A1469 (1).jpg',
    'assets/newBridalImages/3C8A1513.jpg',
    'assets/j14.webp',
    // 'assets/3C8A1513-scaled-1-1.jpg.webp',
  ];
  moveNext(id: string) {
    this.route.navigate([id]);
  }
}
