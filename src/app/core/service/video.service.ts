import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from '../data/dataResponse';
import { Video } from '../data/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  VIDEO_SUBMIT_URL = 'http://localhost:8080/api/video/submit';
  VIDEO_URL = 'http://localhost:8080/api/video';
  VIDEOS_URL = 'http://localhost:8080/api/videos';

  constructor(private http: HttpClient) { }

  submit(video: Video): Observable<DataResponse<null>> {
    return this.http.post<DataResponse<null>>(this.VIDEO_SUBMIT_URL, video);
  }

  get(id: number): Observable<DataResponse<Video>> {
    const url = `${ this.VIDEO_URL }/${ id }`;
    return this.http.get<DataResponse<Video>>(url);
  }

  find(userId: number, name: string): Observable<DataResponse<Video[]>> {
    const httpParams = new HttpParams();
    if (userId != null) {
      httpParams.set('user-id', userId.toString());
    }
    if (name != null) {
      httpParams.set('name', name);
    }
    return this.http.get<DataResponse<Video[]>>(this.VIDEOS_URL, { params: httpParams });
  }

  findByTag(tag: string): Observable<DataResponse<Video[]>> {
    const url = `${ this.VIDEOS_URL }/${ tag }`;
    return this.http.get<DataResponse<Video[]>>(url);
  }
}
