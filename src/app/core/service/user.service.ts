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
  RESOURCE_URL = 'http://localhost:8080/rvideo/resource';
  USER_URL = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {
  }

  logout() {
    LocalStorageService.removeUser();
    LocalStorageService.removeToken();
  }

  update(user: User): Observable<DataResponse<null>> {
    const url = `${ this.USER_URL }/${ user.id }`;
    return this.http.put<DataResponse<null>>(url, user);
  }

  getDetail(id: number): Observable<DataResponse<User>> {
    const url = `${ this.USER_URL }/${ id }`;
    return this.http.get<DataResponse<User>>(url)
      .pipe(
        tap((data: DataResponse<User>) => {
          console.log('getDetail: ' + data.data.name);
          if (data.status === 200) {
            if (data.data.face != null) {
              data.data.face = this.RESOURCE_URL + '/' + data.data.face;
            }
            LocalStorageService.setUser(data.data);
          }
        }),
        catchError(this.handleError)
      );
  }

  isLoginIn(): boolean {
    return LocalStorageService.getToken() != null;
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
