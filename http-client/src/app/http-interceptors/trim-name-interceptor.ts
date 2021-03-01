import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class TrimNameInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const body = req.body;
    if (!body || !body.name ) {
      return next.handle(req);
    }
    const newBody = { ...body, name: body.name.trim() };
    const newReq = req.clone({ body: newBody });
    return next.handle(newReq);
  }
}
