import { deleteQuery } from 'models/queries';
import { Usuario } from 'models/expediente/Usuarios';

const deleteUsuario = async (idUsuario: number) => {
    return await deleteQuery(Usuario)(idUsuario);
  };
  
  export default deleteUsuario;