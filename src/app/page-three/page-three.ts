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
  styleUrl: './page-three.scss'
})
export class PageThree {
   constructor(private route: Router) {}
  images = [
    'assets/Look-7.1-600x900.jpg.webp',
    'assets/Look-3.1-scaled.jpg',
    'assets/Look-15.jpg.webp',
    'assets/2.webp',
    'assets/4.jpg'

  ];
   images2 = [
    'assets/w11.webp',
    'assets/w12.webp',
    'assets/w14.webp',
    'assets/w15.webp'

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

  ];
  moveNext(id: string) {
    this.route.navigate([id]);
  }
  

}
