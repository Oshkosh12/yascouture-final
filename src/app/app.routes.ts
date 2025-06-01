import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Footer } from './footer/footer';
import { Stepper } from './stepper/stepper';
import { Spotlight } from './spotlight/spotlight';
import { Silder } from './silder/silder';
import { PageOne } from './page-one/page-one';
import { PageTwo } from './page-two/page-two';
import { PageThree } from './page-three/page-three';
import { PageFour } from './page-four/page-four';
export const routes: Routes = [
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: 'main-page', component: Silder },
];
