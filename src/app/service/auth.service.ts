import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:4000/api/user/register';
  private loginUrl = 'http://localhost:4000/api/user/login';

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post<any>(this.authUrl, userData);
  }

  login(credentials: { emailOrPseudo: string, password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials);
  }
}
