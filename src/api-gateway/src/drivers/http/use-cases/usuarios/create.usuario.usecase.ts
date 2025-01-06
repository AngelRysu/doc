import { createQuery } from 'models/queries';
import { Usuario } from 'models/expediente/Usuarios';
import { CreationAttributes } from 'sequelize';

type CreateUsuarioData = CreationAttributes<Usuario>;

const createUsuario = async (data: CreateUsuarioData) => {
  return await createQuery(Usuario)(data);
};

export default createUsuario;