import { Routes } from '@angular/router';
import { Registration } from './registration/registration';
import { MainPage } from './main-page/main-page';

export const routes: Routes = [
    {
        path: 'registration',
        component: Registration,
    },
    {
        path: 'home',
        component: MainPage
    }
];
