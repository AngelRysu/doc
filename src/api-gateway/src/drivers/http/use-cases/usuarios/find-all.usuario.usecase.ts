import { findAllQuery } from 'models/queries';
import { Usuario } from 'models/expediente/Usuarios';
import { WhereOptions } from 'sequelize'; 

type FindUsuariosFilter = WhereOptions<Usuario>;

const findUsuarios = async (filter: FindUsuariosFilter = {}) => {
  return await findAllQuery(Usuario)(filter);
};

export default findUsuarios;