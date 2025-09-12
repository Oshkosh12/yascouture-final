import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Silder } from '../silder/silder';
import { Footer } from "../footer/footer";
import { Sidebartwo } from "../sidebartwo/sidebartwo";
import { Slidertwo } from "../slidertwo/slidertwo";
import { SliderThree } from "../slider-three/slider-three";
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-one',
  imports: [MainPage, Silder, Footer, Slidertwo, SliderThree],
  templateUrl: './page-one.html',
  styleUrl: './page-one.scss'
})
export class PageOne {
    constructor(private route: Router) {}
  images2 = [
    'assets/1.jpg',
    'assets/2.webp',
    'assets/3.jpg',
    'assets/4.jpg',
    'assets/5.jpg',
    'assets/newSpringLooksImages/Look 5.2.jpg',
    'assets/newSpringLooksImages/Look 1.1.jpg',
    'assets/newSpringLooksImages/Look 8.2.jpg',
    'assets/newSpringLooksImages/Look 2.1.jpg',
    'assets/newSpringLooksImages/Look 4.1.jpg',
    'assets/newSpringLooksImages/Look 10.1.jpg',
    'assets/newSpringLooksImages/Look 5.1.jpg',
    'assets/newSpringLooksImages/Look 13.2.jpg',
    'assets/newSpringLooksImages/Look 6.1.jpg',
    'assets/newSpringLooksImages/Look 8.1.jpg',
    'assets/newSpringLooksImages/Look 9.1.jpg',
    'assets/newSpringLooksImages/Look 11.2.jpg',
    'assets/newSpringLooksImages/Look 12.1.jpg',
    'assets/newSpringLooksImages/Look 13.1.jpg',
    'assets/newSpringLooksImages/Look 14.jpg',
    'assets/newSpringLooksImages/Look 11.1.jpg',
    'assets/newSpringLooksImages/Look 16.jpg',
    'assets/newSpringLooksImages/Look 17.jpg',
    'assets/newSpringLooksImages/Look 19.jpg',
    'assets/newSpringLooksImages/Look 20.jpg',
    'assets/newSpringLooksImages/Look 22.jpg',
    'assets/newSpringLooksImages/Look 26.jpg',
    'assets/newSpringLooksImages/Look 12.2.jpg',
    'assets/newSpringLooksImages/Look 23.jpg',
    'assets/newSpringLooksImages/Look 24.jpg',
    'assets/newSpringLooksImages/Look 25.jpg',
  ]; images = [
    'assets/fallwinter5.webp',
    'assets/fallwinter3.webp',
    'assets/fallwinter4.webp',
    // 'assets/newWinterLooksImages/Look 1.1.jpg',
    'assets/newWinterLooksImages/Look 2.1.jpg',
    'assets/newWinterLooksImages/Look 3.1.jpg',
    'assets/newWinterLooksImages/Look 4.1.jpg',
    'assets/newWinterLooksImages/Look 6.1.jpg',
    'assets/newWinterLooksImages/Look 7.1.jpg',
    'assets/newWinterLooksImages/Look 10.2.jpg',
    'assets/newWinterLooksImages/Look 12.2.jpg',
    'assets/newWinterLooksImages/Look 13.jpg',
    'assets/newWinterLooksImages/Look 1.2.jpg',
    'assets/newWinterLooksImages/Look 15.jpg',
    'assets/newWinterLooksImages/Look 16.jpg',
    'assets/newWinterLooksImages/Look 18.jpg',
    'assets/newWinterLooksImages/Look 19.jpg',
    'assets/newWinterLooksImages/Look 20.jpg',
    'assets/newWinterLooksImages/Look 21.jpg',
    'assets/newWinterLooksImages/Look 22.jpg',
    'assets/newWinterLooksImages/Look 11.2.jpg',
    'assets/newWinterLooksImages/Look 23.jpg',
    'assets/newWinterLooksImages/Look 24.jpg',
    'assets/newWinterLooksImages/Look 25.jpg',
    'assets/newWinterLooksImages/Look 26.jpg',
    'assets/newWinterLooksImages/Look 27.jpg',

  ];
  images3 = [
    // 'assets/3C8A1513-scaled-1-1.jpg (1).webp',
    'assets/newBridalImages/3C8A1469.jpg',
    'assets/newBridalImages/3C8A1582.jpg',
    'assets/3C8A1513-scaled-1-1.jpg.webp',
    'assets/newBridalImages/3C8A1581.jpg',

  ];
    moveNext(id: string) {
    this.route.navigate([id]);
  }
}
