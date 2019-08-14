import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpInterceptor,
  HttpHandler
} from '@angular/common/http';
import { startWith, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { CacheService } from '@gg/shared/services';

@Injectable({
  providedIn: 'root'
})
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cacheService: CacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cachedResponse = this.cacheService.get(req);
    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.cacheService);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cacheService: CacheService): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          cacheService.put(req, event);
        }
      })
    );
  }
}
