import { Injectable } from '@angular/core';
import {
   HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.getAuthorizationToken();
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });
    return next.handle(authReq);
  }
}
