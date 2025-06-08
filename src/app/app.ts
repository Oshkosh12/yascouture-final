import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
declare global {
  interface Window {
    Weglot: any;
    Weglot_initialized?: boolean;
  }
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements  AfterViewInit {
  protected title = 'YAS Couture';
  private weglotLoaded = false;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.loadWeglotScript().then(() => {
      this.initWeglot();

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.initWeglot();
      });
    });
  }

  loadWeglotScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.weglotLoaded) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdn.weglot.com/weglot.min.js';
      script.onload = () => {
        this.weglotLoaded = true;
        resolve();
      };
      script.onerror = () => reject('Weglot script failed to load');
      document.body.appendChild(script);
    });
  }

  initWeglot() {
    if (window.Weglot) {
      if (!window.Weglot_initialized) {
        window.Weglot.initialize({
          api_key: 'wg_c2d775e6260f61f8c526cd4cf1e7f2af3', 
        });
        window.Weglot_initialized = true;
      } else {
        const currentLang = window.Weglot.getCurrentLang();
        window.Weglot.switchTo(currentLang);
      }
    }
  }

}
