import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Silder } from '../silder/silder';
import { Footer } from "../footer/footer";
@Component({
  selector: 'app-page-one',
  imports: [MainPage, Silder, Footer],
  templateUrl: './page-one.html',
  styleUrl: './page-one.scss'
})
export class PageOne {

}
