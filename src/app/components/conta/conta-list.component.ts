import { Component, OnInit } from '@angular/core';
import { ContaService } from '../../service/conta/conta.service';
import { Conta } from '../../models/conta';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-conta-list',
  imports: [CommonModule],
  templateUrl: './conta-list.component.html',
  styleUrl: './conta-list.component.css'
  
  
})
export class ContaListComponent implements OnInit {
  contas: Conta[] = [];

  constructor(private contaService: ContaService) {}

  ngOnInit(): void {
    this.contaService.getContas().subscribe((data: Conta[]) => {
      this.contas = data;
    });
  }
}