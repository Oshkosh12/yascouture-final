import { Component } from '@angular/core';
import { MainPage } from "../main-page/main-page";
import { Spotlight } from "../spotlight/spotlight";
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-page-five',
  imports: [MainPage, Spotlight,Footer],
  templateUrl: './page-five.html',
  styleUrl: './page-five.scss'
})
export class PageFive {

}
