import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pix } from '../../models/pix';

@Injectable({
  providedIn: 'root'
})
export class PixService {
  private apiUrl = 'http://localhost:8080/api/pix';

  constructor(private http: HttpClient) {}

  createPix(pix: Pix): Observable<Pix> {
    return this.http.post<Pix>(this.apiUrl, pix);
  }
}