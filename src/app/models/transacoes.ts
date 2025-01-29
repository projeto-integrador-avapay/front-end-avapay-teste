import { Conta } from "./conta";

export class Transacoes {
    id_transacao?: number;
    tipo_transacao: string;
    conta_origem: Conta;
    conta_destino: Conta;
    valor: number;
    data_hora: Date;
  
    constructor(
      tipo_transacao: string,
      conta_origem: Conta,
      conta_destino: Conta,
      valor: number,
      data_hora: Date
    ) {
      this.tipo_transacao = tipo_transacao;
      this.conta_origem = conta_origem;
      this.conta_destino = conta_destino;
      this.valor = valor;
      this.data_hora = data_hora;
    }
  }