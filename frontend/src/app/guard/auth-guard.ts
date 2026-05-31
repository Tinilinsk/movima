import { CanActivateFn } from '@angular/router';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if(auth.isLoggedIn()) {
    return true;
  }
  else {
    return router.createUrlTree(['/login']);
  }

};
