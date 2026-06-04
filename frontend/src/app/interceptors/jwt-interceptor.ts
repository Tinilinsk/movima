import { HttpInterceptorFn } from '@angular/common/http';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const auth = inject(Auth);
  const token = auth.getToken();

if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedReq);
  }

  return next(req);
};
