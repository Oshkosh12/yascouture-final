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
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758737702/3C8A1469_rks4js.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758737704/3C8A1582_txslkf.jpg',
    // 'assets/j14.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758737699/3C8A1513-scaled-1-1.jpg_abxyjv.webp',
  ];
  images2 = [
    'assets/j11.webp',
    'https://ik.imagekit.io/ozrxwulka/3C8A1469%20(2).jpg?updatedAt=1758795423814',
    'https://ik.imagekit.io/ozrxwulka/3C8A1513%20(3).jpg?updatedAt=1758792380383',
    'assets/j14.webp',
    // 'assets/3C8A1513-scaled-1-1.jpg.webp',
  ];
  moveNext(id: string) {
    this.route.navigate([id]);
  }
}
