import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Footer } from './footer/footer';
import { Stepper } from './stepper/stepper';
import { Spotlight } from './spotlight/spotlight';


export const routes: Routes = [
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: 'main-page', component: MainPage },
];
