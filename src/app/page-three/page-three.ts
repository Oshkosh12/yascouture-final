import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Silder } from '../silder/silder';
import { Footer } from '../footer/footer';
import { Slidertwo } from "../slidertwo/slidertwo";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-three',
  imports: [MainPage, Footer, Slidertwo],
  templateUrl: './page-three.html',
  styleUrl: './page-three.scss',
})
export class PageThree {
  constructor(private route: Router) {}
  images = [
    'assets/Look-7.1-600x900.jpg.webp',
    'assets/Look-3.1-scaled.jpg',
    'assets/Look-15.jpg.webp',
    'assets/2.webp',
    'assets/4.jpg',
    'assets/newSpringLooksImages/Look 12.2.jpg',
    'assets/newSpringLooksImages/Look 13.1.jpg',
    'assets/newSpringLooksImages/Look 14.jpg',
    'assets/newSpringLooksImages/Look 17.jpg',
    'assets/newSpringLooksImages/Look 19.jpg',
    'assets/newSpringLooksImages/Look 16.jpg',
    'assets/newSpringLooksImages/Look 20.jpg',
    'assets/newSpringLooksImages/Look 12.3.jpg',
    'assets/newSpringLooksImages/Look 22.jpg',
    'assets/newSpringLooksImages/Look 23.jpg',
    'assets/newSpringLooksImages/Look 8.2.jpg',
    'assets/newSpringLooksImages/Look 25.jpg',
    'assets/newSpringLooksImages/Look 13.2.jpg',
    'assets/newSpringLooksImages/Look 9.1.jpg',
  ];
  images2 = [
    'assets/w11.webp',
    'assets/w12.webp',
    'assets/w14.webp',
    // 'assets/w15.webp',
    'assets/newSpringLooksImages/Look 1.1.jpg',
    'assets/newSpringLooksImages/Look 2.1.jpg',
    'assets/newSpringLooksImages/Look 4.1.jpg',
    'assets/newSpringLooksImages/Look 5.1.jpg',
    'assets/newSpringLooksImages/Look 6.1.jpg',
    'assets/newSpringLooksImages/Look 8.1.jpg',
    'assets/newSpringLooksImages/Look 26.jpg',
    'assets/newSpringLooksImages/Look 24.jpg',
    'assets/newSpringLooksImages/Look 10.1.jpg',
    'assets/newSpringLooksImages/Look 11.1.jpg',
    'assets/newSpringLooksImages/Look 12.1.jpg',
  ];
  images3 = [
    'assets/p11.webp',
    'assets/p12.webp',
    'assets/p13.webp',
    'assets/p14.webp',
    'assets/p15.webp',
    'assets/p16.webp',
    'assets/p17.webp',
    'assets/p18.webp',
    'assets/p19.webp',
    'assets/newSpringLooksImages/Look 5.2.jpg',
    'assets/newSpringLooksImages/Look 11.2.jpg',
  ];
  moveNext(id: string) {
    this.route.navigate([id]);
  }
}
