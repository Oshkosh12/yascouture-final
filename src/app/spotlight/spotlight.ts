import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from "../footer/footer";
@Component({
  selector: 'app-spotlight',
  imports: [CommonModule,Footer],
  templateUrl: './spotlight.html',
  styleUrl: './spotlight.scss'
})
export class Spotlight {
products = [
  { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/one.jpg' },
  { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/one.jpg' },
  { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/one.jpg' },
];

}
