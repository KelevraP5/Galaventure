import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  // Déclarez authService comme une propriété de la classe avec le bon type
  private authService: AuthService;

  // Utilisez le constructeur pour injecter authService avec le bon type
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  // Utilisez this.authService pour accéder aux méthodes et propriétés du service d'authentification
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.currentUserValue();
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(request);
  }
}
