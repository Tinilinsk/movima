import { Routes } from '@angular/router';
import { Registration } from './pages/registration/registration';
import { MainPage } from './pages/main-page/main-page';
import { Login } from './pages/login/login';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [
    {
        path: 'registration',
        component: Registration,
    },
    {
        path: '',
        component: MainPage,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: Login
    }
];
