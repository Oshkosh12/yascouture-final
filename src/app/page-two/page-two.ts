import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-page-two',
  imports: [MainPage, Footer],
  templateUrl: './page-two.html',
  styleUrl: './page-two.scss'
})
export class PageTwo {

}
