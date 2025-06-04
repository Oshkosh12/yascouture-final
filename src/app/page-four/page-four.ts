import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Footer } from '../footer/footer';
import { Silder } from "../silder/silder";

@Component({
  selector: 'app-page-four',
  imports: [MainPage, Footer, Silder],
  templateUrl: './page-four.html',
  styleUrl: './page-four.scss'
})
export class PageFour {

}
