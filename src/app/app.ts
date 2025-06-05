import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
declare var Weglot: any;
declare global {
  interface Window {
    WeglotInstance?: any;
  }
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements AfterViewInit {
  protected title = 'YAS Couture';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // Initialize Weglot
    Weglot.initialize({
      api_key: 'wg_c2d775e6260f61f8c526cd4cf1e7f2af3', // Replace with your actual Weglot API key
      originalLanguage: 'en',
      destinationLanguages: ['ar'],
    });

    // Listen for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Wait for DOM to update before applying translation
        setTimeout(() => {
          const currentLang = Weglot.getCurrentLang();
          Weglot.switchTo(currentLang);
        }, 500); // Adjust delay as needed
      }
    });
  }
}
