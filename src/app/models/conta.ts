import { Usuario } from "./usuario";

export class Conta {
        idConta?: number;
        conta: number;
        agencia: number;
        saldo: number;
        dataAbertura: Date;
        senha: string;
        usuario: Usuario;
      
        constructor(
          conta: number,
          agencia: number,
          saldo: number,
          dataAbertura: Date,
          senha: string,
          usuario: Usuario
        ) {
          this.conta = conta;
          this.agencia = agencia;
          this.saldo = saldo;
          this.dataAbertura = dataAbertura;
          this.senha = senha;
          this.usuario = usuario;
        }
      }