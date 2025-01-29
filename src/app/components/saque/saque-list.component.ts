import { Component, OnInit } from '@angular/core';
import { Saque } from '../../models/saque';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaqueService } from '../../service/saque/saque.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque-list.component.html',
  styleUrl:'./saque-list.component.css'
})
export class SaqueComponent implements OnInit {
  saqueForm: FormGroup;
  mensagemErro: string = '';

  constructor(
    private saqueService: SaqueService,
    private fb: FormBuilder
  ) {
    this.saqueForm = this.fb.group({
      conta: ['', Validators.required],
      valor: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {}

  onSaque(): void {
    if (this.saqueForm.valid) {
      this.saqueService.createSaque(this.saqueForm.value).subscribe(
        (response) => {
          // Lógica de sucesso
        },
        (error) => {
          this.mensagemErro = 'Erro ao realizar saque.';
        }
      );
    }
  }
}