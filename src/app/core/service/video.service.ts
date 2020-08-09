import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from '../data/dataResponse';
import { Video } from '../data/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  VIDEO_SUBMIT_URL = 'api/video/submit';
  VIDEO_URL = 'api/video';
  VIDEOS_URL = 'api/videos';

  constructor(private http: HttpClient) { }

  submit(video: Video): Observable<DataResponse<null>> {
    return this.http.post<DataResponse<null>>(this.VIDEO_SUBMIT_URL, video);
  }

  get(id: number): Observable<DataResponse<Video>> {
    const url = `${ this.VIDEO_URL }/${ id }`;
    return this.http.get<DataResponse<Video>>(url);
  }

  getAll(): Observable<DataResponse<Video[]>> {
    const url = `${ this.VIDEOS_URL }/all`;
    return this.http.get<DataResponse<Video[]>>(url);
  }

  delete(id: number): Observable<DataResponse<null>> {
    const url = `${ this.VIDEO_URL }/${ id }`;
    return this.http.delete<DataResponse<null>>(url);
  }

  updateLikes(id: number, likes: number): Observable<DataResponse<null>> {
    const url = `${ this.VIDEO_URL }/${ id }/likes`;
    return this.http.put<DataResponse<null>>(url, { likes: likes });
  }

  updateViews(id: number, views: number): Observable<DataResponse<null>> {
    const url = `${ this.VIDEO_URL }/${ id }/views`;
    return this.http.put<DataResponse<null>>(url, { views: views });
  }

  updateVerify(id: number, verify: number): Observable<DataResponse<null>> {
    const url = `${ this.VIDEO_URL }/${ id }/verify`;
    return this.http.put<DataResponse<null>>(url, { verify: verify });
  }

  find(userId: number, name?: string): Observable<DataResponse<Video[]>> {
    let httpParams;
    if (userId !== null) {
      httpParams = new HttpParams().set('user-id', userId.toString());
    }
    if (name !== null) {
      httpParams = new HttpParams().set('name', name);
    }
    return this.http.get<DataResponse<Video[]>>(this.VIDEOS_URL, { params: httpParams });
  }

  findByTag(tag: string): Observable<DataResponse<Video[]>> {
    const url = `${ this.VIDEOS_URL }/tag/${ tag }`;
    return this.http.get<DataResponse<Video[]>>(url);
  }

  findByVerify(verify: number): Observable<DataResponse<Video[]>> {
    const url = `${ this.VIDEOS_URL }/verify/${ verify }`;
    return this.http.get<DataResponse<Video[]>>(url);
  }
}
