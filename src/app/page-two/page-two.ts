import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Footer } from "../footer/footer";
import { Silder } from "../silder/silder";
import { Sidebartwo } from "../sidebartwo/sidebartwo";
import { Slidertwo } from '../slidertwo/slidertwo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-two',
  imports: [MainPage, Footer, Slidertwo],
  templateUrl: './page-two.html',
  styleUrl: './page-two.scss'
})
export class PageTwo {
  constructor(private route: Router) {}
  images= [
    'assets/3C8A1513-scaled-1-1.jpg (1).webp',
    'assets/3C8A1513-scaled-1-1.jpg.webp',
    'assets/3C8A1581-1-scaled.jpg.webp',
    'assets/3C8A1581-300x450.jpg',

  ];
   images2= [
     'assets/j11.webp',
     'assets/j12.webp',
     'assets/j14.webp',
     'assets/3C8A1581-300x450.jpg',
     'assets/3C8A1581-1-scaled.jpg.webp',
     'assets/3C8A1513-scaled-1-1.jpg.webp',
     'assets/3C8A1513-scaled-1-1.jpg (1).webp',

  ];
    moveNext(id: string) {
    this.route.navigate([id]);
  }
  
}
