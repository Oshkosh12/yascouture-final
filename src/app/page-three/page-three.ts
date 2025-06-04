import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Silder } from '../silder/silder';
import { Footer } from '../footer/footer';
import { Slidertwo } from "../slidertwo/slidertwo";

@Component({
  selector: 'app-page-three',
  imports: [MainPage, Footer, Slidertwo],
  templateUrl: './page-three.html',
  styleUrl: './page-three.scss'
})
export class PageThree {

}
