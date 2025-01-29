import { Conta } from "./conta";
import { Transacoes } from "./transacoes";

export class Pix {
    idPix?: number;
    contaOrigem: Conta;
    contaDestino: Conta;
    valor: number;
    dataHora: Date;
    transacao: Transacoes;
  
    constructor(
      contaOrigem: Conta,
      contaDestino: Conta,
      valor: number,
      dataHora: Date,
      transacao: Transacoes
    ) {
      this.contaOrigem = contaOrigem;
      this.contaDestino = contaDestino;
      this.valor = valor;
      this.dataHora = dataHora;
      this.transacao = transacao;
    }
  }