import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Footer } from './footer/footer';
import { Stepper } from './stepper/stepper';
import { Spotlight } from './spotlight/spotlight';
import { Silder } from './silder/silder';
import { PageOne } from './page-one/page-one';
import { PageTwo } from './page-two/page-two';
import { PageThree } from './page-three/page-three';
import PageFour from './page-four/page-four';
import { PageFive } from './page-five/page-five';
import { Look } from './look/look';
import { Looksshow } from './looksshow/looksshow';
import { SliderFour } from './slider-four/slider-four';
import { Form } from './form/form';
import { PageSix } from './page-six/page-six';
import { PageSeven } from './page-seven/page-seven';
import { PageEight } from './page-eight/page-eight';
export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'main-page', component: PageOne },
  { path: 'SummerSpring', component: PageThree },
  { path: 'WinterFall', component: PageFour },
  { path: 'Bridal', component: PageTwo },
  { path: 'SpotLight', component: PageFive },
  { path: 'BookAppoinment', component: Stepper },
  { path: 'WinterLooks', component: PageSix },
    { path: 'contact-us', component: PageSeven },
      { path: 'summerLooks', component: PageEight },
  { path: 'look', component: Look },
  { path: 'looksShow', component: Looksshow },
  { path: 'slider', component: SliderFour },
  { path: 'form', component: Form },


];
