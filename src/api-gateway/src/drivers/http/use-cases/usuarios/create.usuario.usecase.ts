import { findOneQuery, createQuery } from 'models/queries';
import { Usuario } from 'models/expediente/Usuarios';
import { CreationAttributes } from 'sequelize';

type CreateUsuarioData = CreationAttributes<Usuario>;

const createUsuario = async (data: CreateUsuarioData) => {
  const existingUsuario = await findOneQuery(Usuario)({ curp: data.curp });
  if (existingUsuario) {
    throw new Error('El usuario con este CURP ya existe');
  }
  return await createQuery(Usuario)(data);
};

export { createUsuario };
