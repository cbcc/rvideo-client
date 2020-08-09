import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barrage } from '../data/barrage';
import { DataResponse } from '../data/dataResponse';

@Injectable({
  providedIn: 'root'
})
export class BarrageService {
  BARRAGE_URL = 'api/barrage';
  BARRAGES_URL = 'api/barrages';

  constructor(private http: HttpClient) { }

  save(barrage: Barrage): Observable<DataResponse<null>> {
    return this.http.post<DataResponse<null>>(this.BARRAGE_URL, barrage);
  }

  findByVideoId(videoId: number): Observable<DataResponse<Barrage[]>> {
    const url = `${ this.BARRAGES_URL }/${ videoId }`;
    return this.http.get<DataResponse<Barrage[]>>(url);
  }
}
