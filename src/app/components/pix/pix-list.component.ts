import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PixService } from '../../service/pix/pix.service';

@Component({
  selector: 'app-pix',
  templateUrl: './pix-list.component.html',
  styleUrl: './pix-list.component.css'
})
export class PixComponent implements OnInit {
  pixForm: FormGroup;
  mensagemErro: string = '';

  constructor(
    private pixService: PixService,
    private fb: FormBuilder
  ) {
    this.pixForm = this.fb.group({
      contaOrigem: ['', Validators.required],
      contaDestino: ['', Validators.required],
      valor: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {}

  onPix(): void {
    if (this.pixForm.valid) {
      this.pixService.createPix(this.pixForm.value).subscribe(
        (response) => {
          // Lógica de sucesso
        },
        (error) => {
          this.mensagemErro = 'Erro ao realizar transferência Pix.';
        }
      );
    }
  }
}