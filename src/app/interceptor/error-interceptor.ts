import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../sevices/error-service';
import { inject } from '@angular/core';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const errService = inject(ErrorService);
  
  return next(req).pipe(
    catchError((error:HttpErrorResponse)=>{
      if(error.status === 401){
        const isContinue = confirm("Are you sure you want to continue");
        if(isContinue){
          errService.tokenExpired$.next(true)
        }
      }
      return throwError(error);
    })
  );

};
