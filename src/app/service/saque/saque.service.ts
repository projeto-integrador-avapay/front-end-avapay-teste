import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Saque } from '../../models/saque';

@Injectable({
  providedIn: 'root'
})
export class SaqueService {
  private apiUrl = 'http://localhost:8080/api/saques';

  constructor(private http: HttpClient) {}

  createSaque(saque: Saque): Observable<Saque> {
    return this.http.post<Saque>(this.apiUrl, saque);
  }
}