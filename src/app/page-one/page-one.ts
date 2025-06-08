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
    'assets/5.jpg'
  ]; images = [
    'assets/fallwinter5.webp',
    'assets/fallwinter2.webp',
    'assets/fallwinter3.webp',
    'assets/fallwinter4.webp',

  ];
  images3 = [
    'assets/3C8A1513-scaled-1-1.jpg (1).webp',
    'assets/3C8A1513-scaled-1-1.jpg.webp',
    'assets/3C8A1581-1-scaled.jpg.webp',
    'assets/3C8A1581-300x450.jpg',

  ];
    moveNext(id: string) {
    this.route.navigate([id]);
  }
}
