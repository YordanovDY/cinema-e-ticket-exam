import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { inject } from '@angular/core';
import { HttpResponseErrorService } from './invalid-pages/http-response-error/http-response-error.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.startsWith('/api')) {
    req = req.clone({
      url: req.url.replace('/api', environment.API_URL),
      withCredentials: true
    })
  }

  const httpError = inject(HttpResponseErrorService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err)=> {
      if(err.status === 401){
        router.navigate(['/login']);
      } else{
        httpError.setError(err);
        router.navigate(['/http-error']);
      }

      return [err];
    })
  )
};
