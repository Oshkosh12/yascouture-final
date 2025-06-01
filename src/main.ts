import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { MainPage } from './app/main-page/main-page';
import { register as registerSwiperElements } from 'swiper/element/bundle';
registerSwiperElements();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
