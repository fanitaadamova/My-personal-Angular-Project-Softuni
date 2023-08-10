import { Injectable, Provider } from "@angular/core";
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from "rxjs";
import { environment } from 'src/environments/environment';
import { Router } from "@angular/router";
import { ErrorService } from "./error/error.service";


const { apiUrl } = environment;

@Injectable()

export class CookieInterceptor implements HttpInterceptor {

    constructor(private router: Router, private errorServie: ErrorService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: req.url.replace('/api', apiUrl),
                withCredentials: true
            })
        }
        
        return next.handle(req).pipe(
            catchError((err) => {
              if (err.status === 401) {
                this.router.navigate(['/login']);
              } else {
                this.errorServie.setError(err);
                this.router.navigate(['/error']);
              }
      
              return [err];
            })
          );

    }
}

export const cookieInterceptorProvider: Provider = {
    multi: true,
    useClass: CookieInterceptor,
    provide: HTTP_INTERCEPTORS,
};