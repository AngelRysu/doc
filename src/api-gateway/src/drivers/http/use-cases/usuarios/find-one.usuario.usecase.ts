type UsuarioAttributes = {
    idUsuario: number;
    curp: string;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
};
  
  type FindOneUsuarioData = Partial<UsuarioAttributes>;
  
  import { findOneQuery } from 'models/queries';
  import { Usuario } from 'models/expediente/Usuarios';
  
  const findOneUsuario = async (where: FindOneUsuarioData) => {
    return await findOneQuery(Usuario)(where);
  };
  
  export { findOneUsuario };
  