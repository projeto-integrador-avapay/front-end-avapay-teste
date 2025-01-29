import { Usuario } from "./usuario";

export class Endereco {
        id_endereco?: number;
        rua: string;
        numero: number;
        complemento: string;
        cep: string;
        bairro: string;
        cidade: string;
        estado: string;
        usuario: Usuario[];
      
        constructor(
          rua: string,
          numero: number,
          complemento: string,
          cep: string,
          bairro: string,
          cidade: string,
          estado: string,
          usuario: Usuario[]
        ) {
          this.rua = rua;
          this.numero = numero;
          this.complemento = complemento;
          this.cep = cep;
          this.bairro = bairro;
          this.cidade = cidade;
          this.estado = estado;
          this.usuario = usuario;
        }
      }