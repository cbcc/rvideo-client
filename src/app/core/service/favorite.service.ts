import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataResponse } from '../data/dataResponse';
import { Favorite } from '../data/favorite';
import { Video } from '../data/video';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  FAVORITE_URL = 'api/favorite';
  FAVORITES_URL = 'api/favorites';

  constructor(private http: HttpClient) { }

  save(favorite: Favorite): Observable<DataResponse<null>> {
    return this.http.post<DataResponse<null>>(this.FAVORITE_URL, favorite);
  }

  have(userId: number, videoId: number): Observable<boolean> {
    const url = `${ this.FAVORITE_URL }/${ userId }/${ videoId }`;
    return this.http.get<DataResponse<null>>(url).pipe(
      map( (data: DataResponse<null>) => {
        return data.status === 200;
      })
    );
  }

  delete(userId: number, videoId: number): Observable<DataResponse<null>> {
    const url = `${ this.FAVORITE_URL }/${ userId }/${ videoId }`;
    return this.http.delete<DataResponse<null>>(url);
  }

  findVideoByUserId(userId: number): Observable<DataResponse<Video[]>> {
    const url = `${ this.FAVORITES_URL }/${ userId }`;
    return this.http.get<DataResponse<Video[]>>(url);
  }
}
