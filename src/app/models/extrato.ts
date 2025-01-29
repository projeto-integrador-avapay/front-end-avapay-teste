import { Transacoes } from "./transacoes";

export class Extrato {
        idExtrato?: number;
        dataEmissao: Date;
        tipoTransacao: string;
        transacao: Transacoes;
      
        constructor(
          dataEmissao: Date,
          tipoTransacao: string,
          transacao: Transacoes
        ) {
          this.dataEmissao = dataEmissao;
          this.tipoTransacao = tipoTransacao;
          this.transacao = transacao;
        }
      }