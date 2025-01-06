import { findOneQuery } from 'models/queries';
import { Usuario } from 'models/expediente/Usuarios';

const findOneUsuario = async (idUsuario: number) => {
    return await findOneQuery(Usuario)(idUsuario);
  };
  
  export default findOneUsuario;