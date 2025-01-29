import { Component, OnInit } from '@angular/core';
import { TransacoesService } from '../../service/transacoes/transacoes.service';
import { Transacoes } from '../../models/transacoes';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-transacoes-list',
  imports: [CommonModule],
  templateUrl: './transacoes-list.component.html',
  styleUrl: './transacoes-list.component.css'
  
})
export class TransacoesListComponent implements OnInit {
  transacoes: Transacoes[] = [];

  constructor(private transacoesService: TransacoesService) {}

  ngOnInit(): void {
    this.transacoesService.getTransacoes().subscribe((data: Transacoes[]) => {
      this.transacoes = data;
    });
  }
}