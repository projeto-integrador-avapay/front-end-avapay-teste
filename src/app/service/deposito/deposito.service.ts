import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deposito } from '../../models/deposito';

@Injectable({
  providedIn: 'root'
})
export class DepositoService {
  private apiUrl = 'http://localhost:8080/api/depositos';

  constructor(private http: HttpClient) {}

  createDeposito(deposito: Deposito): Observable<Deposito> {
    return this.http.post<Deposito>(this.apiUrl, deposito);
  }
}