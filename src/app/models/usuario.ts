import { CadastroPix } from "./cadastro-pix";
import { Conta } from "./conta";
import { Endereco } from "./endereco";
import { TipoUsuario } from "./tipo-usuario";



export class Usuario {
  id_usuario?: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  data_cadastro: Date;
  tipo_usuario: TipoUsuario;
  endereco: Endereco;
  cadastro_PIX: CadastroPix;
  conta: Conta[];

  constructor(
    nome: string,
    cpf: string,
    telefone: string,
    email: string,
    data_cadastro: Date,
    tipo_usuario: TipoUsuario,
    endereco: Endereco,
    cadastro_PIX: CadastroPix,
    conta: Conta[]
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.email = email;
    this.data_cadastro = data_cadastro;
    this.tipo_usuario = tipo_usuario;
    this.endereco = endereco;
    this.cadastro_PIX = cadastro_PIX;
    this.conta = conta;
  }
}