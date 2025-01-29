import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conta } from '../../models/conta';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  private apiUrl = 'http://localhost:8080/api/contas';

  constructor(private http: HttpClient) {}

  getContas(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.apiUrl);
  }

  getConta(id: number): Observable<Conta> {
    return this.http.get<Conta>(`${this.apiUrl}/listaConta/${id}`);
  }

  createConta(conta: Conta): Observable<Conta> {
    return this.http.post<Conta>(this.apiUrl, conta);
  }

  updateConta(id: number, conta: Conta): Observable<Conta> {
    return this.http.put<Conta>(`${this.apiUrl}/atualizaConta/${id}`, conta);
  }

  deleteConta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletaConta/${id}`);
  }
}