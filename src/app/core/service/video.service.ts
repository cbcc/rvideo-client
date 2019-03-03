import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from '../data/dataResponse';
import { Video } from '../data/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  VIDEO_SUBMIT_URL = 'http://localhost:8080/api/video/submit';

  constructor(private http: HttpClient) { }

  submit(video: Video): Observable<DataResponse<null>> {
    return this.http.post<DataResponse<null>>(this.VIDEO_SUBMIT_URL, video);
  }
}
