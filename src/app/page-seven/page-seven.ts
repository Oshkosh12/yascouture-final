import { Component } from '@angular/core';
import { MainPage } from "../main-page/main-page";
import { Form } from "../form/form";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-page-seven',
  imports: [MainPage, Form, Footer],
  templateUrl: './page-seven.html',
  styleUrl: './page-seven.scss'
})
export class PageSeven {

}
