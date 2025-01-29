import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private apiUrl = 'http://localhost:8080/api/enderecos';

  constructor(private http: HttpClient) {}

  getEnderecos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.apiUrl);
  }

  getEndereco(id: number): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.apiUrl}/${id}`);
  }

  createEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(this.apiUrl, endereco);
  }

  updateEndereco(id: number, endereco: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>(`${this.apiUrl}/atualizaEndereco/${id}`, endereco);
  }

  deleteEndereco(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletaEndereco/${id}`);
  }
}