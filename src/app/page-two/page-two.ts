import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Footer } from "../footer/footer";
import { Silder } from "../silder/silder";
import { Sidebartwo } from "../sidebartwo/sidebartwo";
import { Slidertwo } from '../slidertwo/slidertwo';

@Component({
  selector: 'app-page-two',
  imports: [MainPage, Footer, Slidertwo],
  templateUrl: './page-two.html',
  styleUrl: './page-two.scss'
})
export class PageTwo {

}
