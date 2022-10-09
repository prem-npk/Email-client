import { Injectable } from '@angular/core';
import { tap, filter } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  /*Implements used for Type script can do a little bit of automated checking on the class(AuthHttpInterceptor)  */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Modify or log outgoing request
    const modifiedReq = req.clone({
      withCredentials:
        true /*If we didn't use withcredentials means while we refersh the page means data(cookies) will disappear.So now back end API server include the cookies. */,
    });
    return next.handle(modifiedReq);
    // .pipe(
    //   filter((val) => val.type === HttpEventType.Sent),
    //   tap((val) => {
    //     console.log('Sent the request');
    // })
    //);
  }
}
