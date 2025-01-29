import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepositoService } from '../../service/deposito/deposito.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito-list.component.html',
  styleUrl:'./deposito-list.component.css'
})
export class DepositoComponent implements OnInit {
  depositoForm: FormGroup;
  mensagemErro: string = '';

  constructor(
    private depositoService: DepositoService,
    private fb: FormBuilder
  ) {
    this.depositoForm = this.fb.group({
      contaOrigem: ['', Validators.required],
      contaDestino: ['', Validators.required],
      valor: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {}

  onDeposito(): void {
    if (this.depositoForm.valid) {
      this.depositoService.createDeposito(this.depositoForm.value).subscribe(
        (response) => {
          // Lógica de sucesso
        },
        (error) => {
          this.mensagemErro = 'Erro ao realizar depósito.';
        }
      );
    }
  }
}