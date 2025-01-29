import { Usuario } from "./usuario";

export class TipoUsuario {
    id_tipo_usuario?: number;
    tipo_usuario: string;
    usuarios: Usuario[];
  
    constructor(
      tipo_usuario: string,
      usuarios: Usuario[]
    ) {
      this.tipo_usuario = tipo_usuario;
      this.usuarios = usuarios;
    }
  }