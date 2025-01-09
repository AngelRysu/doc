type UsuarioAttributes = {
    idUsuario: number;
  };
  
  type DeleteUsuarioData = Partial<UsuarioAttributes>;
  
  import { deleteQuery } from 'models/queries';
  import { Usuario } from 'models/expediente/Usuarios';
  
  const deleteUsuario = async (where: DeleteUsuarioData) => {
    return await deleteQuery(Usuario)(where);
  };
  
  export { deleteUsuario };