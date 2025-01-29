import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacoes } from '../../models/transacoes';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {
  private apiUrl = 'http://localhost:8080/api/transacoes';

  constructor(private http: HttpClient) {}

  getTransacoes(): Observable<Transacoes[]> {
    return this.http.get<Transacoes[]>(this.apiUrl);
  }

  getTransacao(id: number): Observable<Transacoes> {
    return this.http.get<Transacoes>(`${this.apiUrl}/listaTransacao/${id}`);
  }

  createTransacao(transacao: Transacoes): Observable<Transacoes> {
    return this.http.post<Transacoes>(this.apiUrl, transacao);
  }

  updateTransacao(id: number, transacao: Transacoes): Observable<Transacoes> {
    return this.http.put<Transacoes>(`${this.apiUrl}/atualizaTransacao${id}`, transacao);
  }

  deleteTransacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletaTransacao/${id}`);
  }
}