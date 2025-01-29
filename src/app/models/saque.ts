import { Conta } from "./conta";
import { Transacoes } from "./transacoes";

export class Saque {
    idSaque?: number;
    conta: Conta;
    tipoTransacao: string;
    taxa: number;
    transacao: Transacoes;
  
    constructor(
      conta: Conta,
      tipoTransacao: string,
      taxa: number,
      transacao: Transacoes
    ) {
      this.conta = conta;
      this.tipoTransacao = tipoTransacao;
      this.taxa = taxa;
      this.transacao = transacao;
    }
  }
  