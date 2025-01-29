import { Usuario } from "./usuario";

export class CadastroPix {
    idPixCadastro?: number;
    chaveCadastradaPix: string;
    chavePix: string;
    usuario: Usuario;
  
    constructor(
      chaveCadastradaPix: string,
      chavePix: string,
      usuario: Usuario
    ) {
      this.chaveCadastradaPix = chaveCadastradaPix;
      this.chavePix = chavePix;
      this.usuario = usuario;
    }
  }