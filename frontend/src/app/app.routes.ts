import { Routes } from '@angular/router';
import { Registration } from './pages/registration/registration';
import { MainPage } from './pages/main-page/main-page';
import { Login } from './pages/login/login';
import { WatchedPage } from './pages/watched-page/watched-page';
import { authGuard } from './guard/auth-guard';
import { Item } from './pages/item/item';

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
    },
    {
        path:'watched',
        component: WatchedPage
    },
    {
        path: 'movies/:id',
        component: Item
    }
];
