import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Silder } from '../silder/silder';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-page-three',
  imports: [MainPage,Silder,Footer],
  templateUrl: './page-three.html',
  styleUrl: './page-three.scss'
})
export class PageThree {

}
