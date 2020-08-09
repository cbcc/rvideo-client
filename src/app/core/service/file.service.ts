import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataResponse } from '../data/dataResponse';
import { UploadProgress } from './uploadProgress';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  RESOURCE_URL = 'resource';
  UPDATE_FACE_URL = 'api/user';
  VIDEO_FILE_UPLOAD_URL = 'api/video/file/upload';
  VIDEO_FACE_UPLOAD_URL = 'api/video/face/upload';

  constructor(private http: HttpClient) {
  }

  uploadFace(id: number, file: File): Observable<DataResponse<null>> {
    if (!file) {
      return;
    }
    const url = `${ this.UPDATE_FACE_URL }/${ id }/face`;
    const formData = new FormData();
    formData.append('file', file);
    return this.http.put<DataResponse<null>>(url, formData);
  }

  uploadVideoFace(file: File): Observable<DataResponse<string>> {
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<DataResponse<string>>(this.VIDEO_FACE_UPLOAD_URL, formData);
  }

  uploadVideo(file: File): Observable<UploadProgress> {
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', this.VIDEO_FILE_UPLOAD_URL, formData, {
      reportProgress: true
    });
    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event, file)),
    );
  }

  private getEventMessage(event: HttpEvent<any> | HttpResponse<DataResponse<string>>, file: File): UploadProgress {
    const uploadProgress: UploadProgress = new UploadProgress();
    switch (event.type) {
      case HttpEventType.Sent:
        uploadProgress.value = 0;
        uploadProgress.message = `正在上传 "${ file.name }" 大小： ${ file.size }.`;
        break;
      case HttpEventType.UploadProgress:
        uploadProgress.value = Math.round(100 * event.loaded / event.total);
        uploadProgress.message = `${ uploadProgress.value }%`;
        break;
      case HttpEventType.Response:
        uploadProgress.value = 100;
        uploadProgress.message = `"${ file.name }"上传成功！`;
        uploadProgress.path = event.body.data;
        break;
      default:
        uploadProgress.message = `"${ file.name }" surprising upload event: ${ event.type }.`;
    }
    return uploadProgress;
  }
}
