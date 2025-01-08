import { findAllQuery } from 'models/queries';
import { Usuario } from 'models/expediente/Usuarios';

type FindAllUsuariosData = Partial<Usuario>;

const findAllUsuarios = async (where?: FindAllUsuariosData) => {
  return await findAllQuery(Usuario)(where);
};

export { findAllUsuarios };