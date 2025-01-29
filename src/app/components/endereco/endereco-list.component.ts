import { Component, OnInit } from '@angular/core';
import { Endereco } from '../../models/endereco'; 
import { EnderecoService } from '../../service/endereco/endereco.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-endereco-list',
  imports: [CommonModule],
  templateUrl: './endereco-list.component.html',
  styleUrl: './endereco-list.component.css'
 
  
})
export class EnderecoListComponent implements OnInit {
  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService) {}

  ngOnInit(): void {
    this.enderecoService.getEnderecos().subscribe((data: Endereco[]) => {
      this.enderecos = data;
    });
  }
}