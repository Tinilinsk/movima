import { Routes } from '@angular/router';
import { Registration } from './registration/registration';
import { MainPage } from './main-page/main-page';
import { Login } from './login/login';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [
    {
        path: 'registration',
        component: Registration,
    },
    {
        path: 'home',
        component: MainPage
    },
    {
        path: 'login',
        component: Login
    }
];
