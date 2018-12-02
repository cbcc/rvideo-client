import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../../core/service/local-storage.service';
import { AuthResponse } from '../data/AuthResponse';
import { UserService } from '../../../core/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  redirectUrl: string;
  LOGIN_URL = 'http://localhost:8080/api/user/login';

  constructor(private userService: UserService, private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.LOGIN_URL, { email: email, password: password })
      .pipe(
        tap((data: AuthResponse) => {
          if (data.status > 0) {
            LocalStorageService.setToken(data.token);
          }
        }),
      );
  }
}
