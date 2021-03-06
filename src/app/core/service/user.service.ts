import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DataResponse } from '../data/dataResponse';
import { User } from '../data/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  RESOURCE_URL = 'resource';
  USER_URL = 'api/user';
  USERS_URL = 'api/users';

  constructor(private http: HttpClient) {
  }

  logout() {
    LocalStorageService.removeUser();
    LocalStorageService.removeToken();
  }

  adminLogout() {
    LocalStorageService.removeAdmin();
    LocalStorageService.removeToken();
  }

  update(user: User): Observable<DataResponse<null>> {
    const url = `${ this.USER_URL }/${ user.id }`;
    return this.http.put<DataResponse<null>>(url, user);
  }

  getDetail(id: number, role: string): Observable<DataResponse<User>> {
    const url = `${ this.USER_URL }/${ id }`;
    return this.http.get<DataResponse<User>>(url)
      .pipe(
        tap((data: DataResponse<User>) => {
          if (data.status === 200) {
            if (data.data.face != null) {
              data.data.face = this.RESOURCE_URL + '/' + data.data.face;
            }
            if (role === 'USER') {
              LocalStorageService.setUser(data.data);
            } else if (role === 'ADMIN') {
              LocalStorageService.setAdmin(data.data);
            }
          }
        }),
        catchError(this.handleError)
      );
  }

  getAll(): Observable<DataResponse<User[]>> {
    return this.http.get<DataResponse<User[]>>(this.USERS_URL);
  }

  delete(id: number): Observable<DataResponse<null>> {
    const url = `${ this.USER_URL }/${ id }`;
    return this.http.delete<DataResponse<null>>(url);
  }

  findLikeName(name: string): Observable<DataResponse<User[]>> {
    const url = `${ this.USERS_URL }/name/${ name }`;
    return this.http.get<DataResponse<User[]>>(url);
  }

  isLoginIn(): boolean {
    return LocalStorageService.getUser() != null;
  }

  isAdminLoginIn(): boolean {
    return LocalStorageService.getAdmin() != null;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response status.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code: ${ error.status }`);
      console.error(`body status: ${ error.error.status }`);
      console.error(`body message: ${ error.error.message }`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
